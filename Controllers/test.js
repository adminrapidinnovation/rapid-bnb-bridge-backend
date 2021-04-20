const Web3 = require('web3');
const dotenv = require('dotenv');
dotenv.config();
let contractAddress = '0x92d97ab672f71e029dfbc18f01e615c3637b1c95';
let url = process.env.RINKEY_ETHURL;
const web3 = new Web3(url);
const TX = require('ethereumjs-tx').Transaction;
const privateKey = Buffer.from(process.env.META_PRIVATE_KEY,'hex');
const publicKey = process.env.META_PUBLIC_KEY;
const ABI = require("../Abis/abi");
const contractAbi = ABI.getContractAbi(contractAddress);

// exports.controllerThing = (req,res)=>{
//     console.log(eth)
//     res.status(200).send(eth);
// }

exports.balanceOfContract = async (req,res) => {
    // console.log(url);
    // res.json(contractAbi);
    let balance = await readValue(contractAbi,contractAddress);
    res.json(balance);
}

exports.approveContract = async (req,res) => {    
    let resp = await approveContractFun(contractAbi,contractAddress);
    res.json(resp);
}

exports.checkApprovedContracts = async (req,res) =>{
    let data = await checkApproval(contractAbi,contractAddress);
    res.json(data)
}

const transact = async (data, value) => {
   //  console.log(data, contractAddress, holderAddress, privateKey, value)
        try {
            var count = await web3.eth.getTransactionCount(publicKey);
            console.log("count",count);
            var gasPrice = await web3.eth.getGasPrice();
            console.log("gasPrice",gasPrice);
            var txData = {
                nonce: count, //transaction count
                gasLimit: 1500000,
                gasPrice: Number(gasPrice), //gas Price
                to: contractAddress, // to whom which want to contact 
                from: publicKey, // public key
                data: data,
                value: value
            }
            var transaction = new TX(txData,{chain:'rinkeby', hardfork:'petersburg'});
            console.log("transaction ->",transaction);
            transaction.sign(privateKey);
            console.log("Transaction ->",transaction);
            var serialisedTransaction = transaction.serialize().toString('hex');
            console.log("serialisedTransaction ->",serialisedTransaction);
            var receipt = await web3.eth.sendSignedTransaction('0x' + serialisedTransaction);
            console.log("Transaction Receipt -->",receipt);
            return receipt;
        } catch(e) {
                throw new Error(e);
    		}
}


async function readValue(abi,contractAdd){
  try{
    const cont = new web3.eth.Contract(abi, contractAdd);
    console.log("Contract-->",cont);
    const functCall = await cont.methods.balanceOf('0xB6e3974F93B9e5790Ae0a3f4Aea00c83bdD26bfc').call();
    console.log(functCall);
    return functCall;
  } catch(e) {
    throw new Error(e);
  }

};

async function approveContractFun(abi,contractAddress){
  try{
    const cont = new web3.eth.Contract(abi,contractAddress);
    const functCall = await cont.methods.approve('0xB6e3974F93B9e5790Ae0a3f4Aea00c83bdD26bfc',1000000).encodeABI();
    const receipt = await transact(functCall, 0)
    console.log(receipt);
    return receipt;
  } catch(e) {
    throw new Error(e);
  }

};

async function checkApproval(abi,contractAddress){
    try{
        const cont = new web3.eth.Contract(abi,contractAddress);
        const functCall = await cont.methods.allowance(publicKey,'0xB6e3974F93B9e5790Ae0a3f4Aea00c83bdD26bfc').call();
        console.log(functCall)
        return functCall;
      } catch(e) {
        throw new Error(e);
      }
}

