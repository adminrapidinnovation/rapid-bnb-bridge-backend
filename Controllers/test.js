const Web3 = require('web3');
const dotenv = require('dotenv');
dotenv.config();
let contractAddress = process.env.TEST_CONTRACT_ADD;
let ethContractAddress = process.env.ETH_CONTRACT_ADD;
let binContractAddress = process.env.BIN_CONTRACT_ADD;
let url = process.env.RINKEY_ETHURL;
const web3 = new Web3(url);
const TX = require('ethereumjs-tx').Transaction;
const privateKey = Buffer.from(process.env.META_PRIVATE_KEY,'hex');
const publicKey = process.env.META_PUBLIC_KEY;
const ABI = require("../Abis/abi");
const contractAbi = ABI.getContractAbi(contractAddress);
const async = require('async');
const db = require('../custom_modules/mysql_connection/index');
let binUrl = process.env.BINANCE_URL;
const binWeb3 = new Web3(binUrl);

const TestService = require('../BLL/test');


const Helper = new Object();

Helper.controllerThing = (req,res)=>{
  res.status(200).json("Test");
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

const binanceTransact = async (data, value) => {
  try {
    const count = await web3.eth.getTransactionCount(deployerAddress);
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
    const service = new TestService();
    // let ethContractAddress = process.env.ETH_CONTRACT_ADD;
    // let binContractAddress = process.env.BIN_CONTRACT_ADD;
    let ethContAbi =  ABI.getContractAbi(ethContractAddress);
    let binContAbi = ABI.getContractAbi(binContractAddress);

    const ethCont = new web3.eth.Contract(ethContAbi, ethContractAddress);
    const binCont = new binWeb3.eth.Contract(binContAbi, binContractAddress);

    let ethereumOutgoingId = await ethCont.methods.next_outgoing_message_id().call();
    
    let dbEthereumCount = await service.fetchData(`select * from ethereummessages order by id desc limit 1`);
    // console.log(dbEthereumCount);
    let ethereumServerIds = [];
    let ethereumServerId = ethereumOutgoingId-1;
    let ethereumLocalId = 0;
    if(dbEthereumCount.length){
      ethereumLocalId = dbEthereumCount[0].messageId;
    }

    // console.log("Ethereum Outgoing Call ->",ethereumOutgoingId,"Ehtereum Local Count",ethereumLocalId)
    

    if((ethereumOutgoingId == 0) || ((ethereumOutgoingId!= 0) && (ethereumServerId == ethereumLocalId))){
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
        
        let updateLocal = await service.insertData(`insert into ethereummessages set ?`,{ messageId : ethereumServerIds[i], message : ethereumMessage[0], response : receipt.slice(0,255), sent : true });
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
  await Helper.updateCronLogs("Binance Api call",functionResponse);
  res.json(functionResponse);
}

Helper.checkEthereumEntry = async () =>{
  try{
    const service = new TestService();
    // let ethContractAddress = process.env.ETH_CONTRACT_ADD;
    // let binContractAddress = process.env.BIN_CONTRACT_ADD;
    let ethContAbi =  ABI.getContractAbi(ethContractAddress);
    let binContAbi = ABI.getContractAbi(binContractAddress);

    const ethCont = new web3.eth.Contract(ethContAbi, ethContractAddress);
    const binCont = new binWeb3.eth.Contract(binContAbi, binContractAddress);

    let binanceOutgoingId = await binCont.methods.next_outgoing_message_id().call();
    // console.log("binanceOutgoingId",binanceOutgoingId);
    // let binanceOutgoingId = 3;
    
    // let dbBinanceCount = 0;
    let dbBinanceCount = await service.fetchData(`select * from binancemessages order by id desc limit 1`);
    // console.log("dbBinanceCount",dbBinanceCount);
    let binanceServerIds = [];
    let binanceServerId = binanceOutgoingId-1;
    let binanceLocalId = 0;
    if(dbBinanceCount.length){
      binanceLocalId = dbBinanceCount[0].messageId;
    }

    if((binanceOutgoingId == 0) || ((binanceOutgoingId != 0) && (binanceServerId == binanceLocalId))){
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
        let updateLocal = await service.insertData(`insert into binancemessages set ?`,{ messageId : binanceServerIds[i], message : binanceMessage[0], response : receipt.slice(0,255), sent : true });
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
  await Helper.updateCronLogs("Ethereum Api call",functionResponse);
  res.json(functionResponse);
}

Helper.updateCronLogs = async (cronType,message) =>{
  const service = new TestService();
  let logUpdate = await service.insertData(`insert into cronlogs set ?`,{ cronName : cronType, cronMessage : message });
  return "updated";
}

module.exports = Helper;