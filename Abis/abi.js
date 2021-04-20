exports.getContractAbi = (contractAdress)=>{
    switch(contractAdress){
        case "0x92d97ab672f71e029dfbc18f01e615c3637b1c95" : 
        return [
            {
            "inputs": [
                {
                "internalType": "string",
                "name": "_name",
                "type": "string"
                },
                {
                "internalType": "string",
                "name": "_symbol",
                "type": "string"
                },
                {
                "internalType": "address",
                "name": "_bridgeContractAddress",
                "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
            },
            {
            "anonymous": false,
            "inputs": [
                {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
                },
                {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
                },
                {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
            },
            {
            "anonymous": false,
            "inputs": [
                {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
                },
                {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
                },
                {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
            },
            {
            "inputs": [],
            "name": "bridgeContractAddress",
            "outputs": [
                {
                "internalType": "address",
                "name": "",
                "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
            },
            {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
            },
            {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                "internalType": "string",
                "name": "",
                "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
            },
            {
            "inputs": [],
            "name": "ownerAddress",
            "outputs": [
                {
                "internalType": "address",
                "name": "",
                "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
            },
            {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                "internalType": "string",
                "name": "",
                "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
            },
            {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
            },
            {
            "inputs": [
                {
                "internalType": "address",
                "name": "account",
                "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
            },
            {
            "inputs": [
                {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
                },
                {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                "internalType": "bool",
                "name": "",
                "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
            },
            {
            "inputs": [
                {
                "internalType": "address",
                "name": "owner",
                "type": "address"
                },
                {
                "internalType": "address",
                "name": "spender",
                "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
            },
            {
            "inputs": [
                {
                "internalType": "address",
                "name": "spender",
                "type": "address"
                },
                {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                "internalType": "bool",
                "name": "",
                "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
            },
            {
            "inputs": [
                {
                "internalType": "address",
                "name": "sender",
                "type": "address"
                },
                {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
                },
                {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                "internalType": "bool",
                "name": "",
                "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
            },
            {
            "inputs": [
                {
                "internalType": "address",
                "name": "account",
                "type": "address"
                },
                {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
                }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
            },
            {
            "inputs": [
                {
                "internalType": "address",
                "name": "account",
                "type": "address"
                },
                {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
                }
            ],
            "name": "burn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
            },
            {
            "inputs": [
                {
                "internalType": "address",
                "name": "_bridgeContractAddress",
                "type": "address"
                }
            ],
            "name": "updateBridgeContractAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
            },
            {
            "inputs": [
                {
                "internalType": "address",
                "name": "_newOwner",
                "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
            }
        ];
        case "test" : 
        return [{test: 123}];
        case "default" : "Wrong Contract Address";
    }
}