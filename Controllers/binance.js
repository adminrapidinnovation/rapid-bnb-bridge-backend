const Web3 = require('web3');
const dotenv = require('dotenv');
dotenv.config();
let testcontractAddress = process.env.TEST_CONTRACT_ADD;
let testBinContractAddress = process.env.BINTEST_CONTRACT_ADD;

let ethContractAddress = process.env.ETH_CONTRACT_ADD;
let binContractAddress = process.env.BIN_CONTRACT_ADD;

let url = process.env.RINKEY_ETHURL;
const web3 = new Web3(url);

let binUrl = process.env.BINANCE_URL;
const binWeb3 = new Web3(binUrl);

const TX = require('ethereumjs-tx').Transaction;

const privateKey = Buffer.from(process.env.META_PRIVATE_KEY,'hex');
const publicKey = process.env.META_PUBLIC_KEY;

const ABI = require("../CustomModules/abi");
const EthereumService = require('../BLL/ethereum');
const BinanceService = require('../BLL/binance');

const Helper = new Object();

Helper.controller = (req,res) => {
    res.json("Binance Controller");    
}

const binanceTransact = async (data, value) => {
    try {
      const count = await web3.eth.getTransactionCount(publicKey);
      const gasPrice = await web3.eth.getGasPrice();
      // console.log(gasPrice,'gaasspr')
      const tx = {
        from: publicKey,
        to: binContractAddress,
        gas: web3.utils.toHex(3000000),
        gasPrice: Number(gasPrice),
        value: value,
        data: data ,
        nonce: web3.utils.toHex(count),
      };
      const signPromise = await web3.eth.accounts.signTransaction(tx,privateKey);
      const sentTx = await web3.eth.sendSignedTransaction(signPromise.raw || signPromise.rawTransaction);  
      return({success : true,data : sentTx});
    } catch(e) {
      // console.log('in catch')
      return({success: false,error : e});
    }
}

Helper.checkBinanceEntry = async () =>{
    try{      
      const Eservice = new EthereumService();
      // let ethContractAddress = process.env.ETH_CONTRACT_ADD;
      // let binContractAddress = process.env.BIN_CONTRACT_ADD;
      let ethContAbi =  ABI.getContractAbi(ethContractAddress);
      let binContAbi = ABI.getContractAbi(binContractAddress);
  
      const ethCont = new web3.eth.Contract(ethContAbi, ethContractAddress);
      const binCont = new binWeb3.eth.Contract(binContAbi, binContractAddress);
  
      let ethereumOutgoingId = await ethCont.methods.next_outgoing_message_id().call();
      
      let dbEthereumCount = await Eservice.ethereumLastMessage();
      // console.log(dbEthereumCount);
      let ethereumServerIds = [];
      let ethereumServerId = ethereumOutgoingId-1;
      let ethereumLocalId = 0;
      if(dbEthereumCount.length){
        ethereumLocalId = dbEthereumCount[0].messageId;
      }
  
      // console.log("Ethereum Outgoing Call ->",ethereumOutgoingId,"Ehtereum Local Count",ethereumLocalId)
  
      if((ethereumOutgoingId == 0) || ((ethereumOutgoingId!= 1) && (ethereumServerId == ethereumLocalId))){
        // console.log("no changes are required");
        return("No changes required");
      }else{
        let count = 0;
        count = ethereumOutgoingId - ethereumLocalId;
  
        if(ethereumServerId == 0){
          ethereumServerIds.push(ethereumServerId);
        }else{
          for(let i=0; i<count; i++){
            if(i==0 && dbEthereumCount.length == 0){
              ethereumLocalId = 0;
            }else{
              ethereumLocalId = ethereumLocalId + 1;
            }
            ethereumServerIds.push(ethereumLocalId);
          }
        }
        
        // console.log(ethereumServerIds);
        // console.log(ethereumServerIds.length);
  
        let updateCount = 0, errCount = 0;
  
        for(let i=0; i<ethereumServerIds.length; i++){
          let ethereumMessage = await ethCont.methods.getMessage(ethereumServerIds[i]).call();
          let updateBinance = await binCont.methods.pushInboundMessage(ethereumServerIds[i], ethereumMessage[0]).encodeABI();
          let receipt = await binanceTransact(updateBinance, 0);
          
          if(receipt.success){
            receipt = JSON.stringify(receipt.data);
          }else{
            receipt = JSON.stringify(receipt.error);
          }
          
          // console.log("Receipt",receipt.slice(0,255));
          let insertObj = { 
              messageId : ethereumServerIds[i],
              message : ethereumMessage[0],
              response : receipt.slice(0,255),
              sent : true
            };

          let updateLocal = await Eservice.insertEthereumLog(insertObj);

          if(updateLocal){
            updateCount++;
          }else{
            console.log(updateLocal);
            errCount++;
          }        
        }
        return("Messages updated. updateCount : "+updateCount+", errCount : "+errCount);
      }
    }catch(e){
      throw new Error(e);
    }
}

Helper.checkForBinanceEntries = async (req,res) => {
    let functionResponse = await Helper.checkBinanceEntry();
    // console.log(functionResponse);
    const Eservice = new EthereumService();
    let cronObj = { cronName : "Binance Api call", cronMessage : functionResponse };
    await Eservice.createCronLogs(cronObj);
    res.json(functionResponse);
}

module.exports = Helper;