const Web3 = require('web3-eth');
const web3 = new Web3();

const eth = new Web3('ws://localhost:8546');

exports.controllerThing = (req,res)=>{
    console.log(eth)
    res.status(200).send(eth);
}


/* eslint-disable prefer-const */
/* global contract artifacts web3 before it assert */

// const Web3 = require('web3');
// const config = require('./../config.js');
// const web3 = new Web3('infureNodeurl');
// const TX = require('ethereumjs-tx').Transaction;

// const privateKey = Buffer.from('privateKey','hex');

// const transact = async (data, value) => {
//    //  console.log(data, contractAddress, holderAddress, privateKey, value)
//         try {
//             var count = await web3.eth.getTransactionCount(deployerAddress);
//             var gasPrice = await web3.eth.getGasPrice();
//             var txData = {
//                 nonce: 19,
//                 gasLimit: 1500000,
//                 gasPrice: 120000000000,
//                 to: 'ContractAddress',
//                 from: 'deployerAddress',
//                 data: data, 
//                 value: value
//             }
//             var transaction = new TX(txData,{chain:'ropsten', hardfork:'petersburg'});
//             transaction.sign(privateKey);
//             var serialisedTransaction = transaction.serialize().toString('hex');
    
//             var receipt = await web3.eth.sendSignedTransaction('0x' + serialisedTransaction);
//             return receipt;
//         } catch(e) {
//                 throw new Error(e);
//     		}
// }


// async function readValue(){
//   try{
//   const cont = new web3.eth.Contract('ABI', 'Contractaddress')
//   const functCall = await EosToEth2.methods.contractParams().call();
//   } catch(e) {
//       throw new Error(e);
//   }

// };

// async function functionCall1(){
//   try{
   
//   const cont = new web3.eth.Contract('ContractABI', 'ContractAddreas');
//   const functCall = await cont.methods
//       .methodName(
//         'parametere'
//       ).encodeABI();
//   const receipt = await transact(functCall, 0)
//   console.log(receipt)
//   } catch(e) {
//       throw new Error(e);
//   }

// };