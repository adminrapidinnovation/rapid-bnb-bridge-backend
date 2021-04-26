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

Helper.controllerThing = (req,res)=>{
  res.status(200).json("Ethereum  Controller");
}

const ethereumTransact = async (data, value) => {
   //  console.log(data, contractAddress, holderAddress, privateKey, value)
  try {
    var count = await web3.eth.getTransactionCount(publicKey);
    // console.log("count",count);
    var gasPrice = await web3.eth.getGasPrice();
    // console.log("gasPrice",gasPrice);
    var txData = {
        nonce: count, //transaction count
        gasLimit: 1500000,
        gasPrice: Number(gasPrice), //gas Price
        to: ethContractAddress, // to whom which want to contact
        from: publicKey, // public key
        data: data,
        value: value
    }
    var transaction = new TX(txData,{chain:'rinkeby', hardfork:'petersburg'});
    // console.log("transaction ->",transaction);
    transaction.sign(privateKey);
    // console.log("Transaction ->",transaction);
    var serialisedTransaction = transaction.serialize().toString('hex');
    // console.log("serialisedTransaction ->",serialisedTransaction);
    var receipt = await web3.eth.sendSignedTransaction('0x' + serialisedTransaction);
    // console.log("Transaction Receipt -->",receipt);
    return({success : true,data :receipt});
  } catch(e) {
    return({success: false,error : e});
  }
}

Helper.checkEthereumEntry = async () =>{
  try{
    const service = new BinanceService();
    // let ethContractAddress = process.env.ETH_CONTRACT_ADD;
    // let binContractAddress = process.env.BIN_CONTRACT_ADD;
    let ethContAbi =  ABI.getContractAbi(ethContractAddress);
    let binContAbi = ABI.getContractAbi(binContractAddress);

    const ethCont = new web3.eth.Contract(ethContAbi, ethContractAddress);
    const binCont = new binWeb3.eth.Contract(binContAbi, binContractAddress);

    let binanceOutgoingId = await binCont.methods.next_outgoing_message_id().call();
    console.log("binanceOutgoingId",binanceOutgoingId);
    // let binanceOutgoingId = 3;
    
    // let dbBinanceCount = 0;
    let dbBinanceCount = await service.binanceLastMessage();
    // console.log("dbBinanceCount",dbBinanceCount);
    let binanceServerIds = [];
    let binanceServerId = binanceOutgoingId-1;
    let binanceLocalId = 0;
    if(dbBinanceCount.length){
      binanceLocalId = dbBinanceCount[0].messageId;
    }

    if((binanceOutgoingId == 0) || ((binanceOutgoingId != 1) && (binanceServerId == binanceLocalId))){
      // console.log("no changes are required");
      return("No changes required");
    }else{
      let count = 0, updateCount = 0, errCount = 0;
      count = binanceOutgoingId - binanceLocalId;
      // console.log(count);
      if(binanceServerId == 0){
        binanceServerIds.push(binanceServerId);
      }else{
        for(let i=0; i<count; i++){
          if(i==0 && dbBinanceCount.length == 0){
            binanceLocalId = 0;
          }else{
            binanceLocalId = binanceLocalId + 1;
          }          
          binanceServerIds.push(binanceLocalId);
        }
      }
      
      // console.log(binanceServerIds);
      // console.log(binanceServerIds.length);
      for(let i=0; i<binanceServerIds.length; i++){
        let binanceMessage = await binCont.methods.getMessage(binanceServerIds[i]).call();
        // let binanceMessage = "Testing "+binanceServerIds[i];
        let updateEthereum = await ethCont.methods.pushInboundMessage(binanceServerIds[i], binanceMessage[0]).encodeABI();
        let receipt = await ethereumTransact(updateEthereum, 0);
        
        if(receipt.success){
          receipt = JSON.stringify(receipt.data);
        }else{
          receipt = JSON.stringify(receipt.error);
        }
        // console.log("Receipt",receipt.slice(0,255));
        // let receipt = '{"success":"True"}';

        let obj = { 
          messageId : binanceServerIds[i], 
          message : binanceMessage[0], 
          response : receipt.slice(0,255), 
          sent : true 
        };
        
        let updateLocal = await service.insertBinanceLog(obj);
        
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

Helper.checkForEthereumEntries = async (req,res) => {
  let functionResponse = await Helper.checkEthereumEntry();
  // console.log(functionResponse);
  const Eservice = new EthereumService();
  let cronObj = { cronName : "Ethereum Api call", cronMessage : functionResponse };
  await Eservice.createCronLogs(cronObj);
  res.json(functionResponse);
}

module.exports = Helper;