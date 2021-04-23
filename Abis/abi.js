exports.getContractAbi = (contractAdress)=>{
    switch(contractAdress){
        case process.env.TEST_CONTRACT_ADD : 
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
        case process.env.ETH_CONTRACT_ADD : 
        return [
            {
                "inputs": [
                    {
                        "internalType": "address[]",
                        "name": "_owners",
                        "type": "address[]"
                    },
                    {
                        "internalType": "uint8",
                        "name": "_required_sigs",
                        "type": "uint8"
                    },
                    {
                        "internalType": "address[]",
                        "name": "_token_contracts",
                        "type": "address[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "_max_mint_period_amount",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "_max_mint_period",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "_max_mint_allowed",
                        "type": "uint256[]"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "bytes",
                        "name": "reason",
                        "type": "bytes"
                    }
                ],
                "name": "Failure",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes",
                        "name": "reason",
                        "type": "bytes"
                    }
                ],
                "name": "Receipt",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes",
                        "name": "reason",
                        "type": "bytes"
                    }
                ],
                "name": "Refund",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_token_address",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_max_mint_period_amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_max_mint_period",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_max_mint_allowed",
                        "type": "uint256"
                    }
                ],
                "name": "addNewToken",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint64",
                        "name": "",
                        "type": "uint64"
                    }
                ],
                "name": "altered",
                "outputs": [
                    {
                        "internalType": "bytes",
                        "name": "message",
                        "type": "bytes"
                    },
                    {
                        "internalType": "address",
                        "name": "signer",
                        "type": "address"
                    },
                    {
                        "internalType": "uint64",
                        "name": "timestamp",
                        "type": "uint64"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "changeLockStatus",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "claimGas",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint64",
                        "name": "tokenId",
                        "type": "uint64"
                    }
                ],
                "name": "claimToken",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "uint64",
                        "name": "",
                        "type": "uint64"
                    }
                ],
                "name": "claimableTokens",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "configs",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "max_mint_allowed",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "max_mint_period_amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "max_mint_period",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "contractOwner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "name": "executedMsg",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "gas_used",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint64",
                        "name": "message_id",
                        "type": "uint64"
                    }
                ],
                "name": "getMessage",
                "outputs": [
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    },
                    {
                        "internalType": "uint256",
                        "name": "block_num",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "uint64",
                        "name": "timestamp",
                        "type": "uint64"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "hasConfirmed",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint64",
                        "name": "",
                        "type": "uint64"
                    }
                ],
                "name": "inbound",
                "outputs": [
                    {
                        "internalType": "bytes",
                        "name": "message",
                        "type": "bytes"
                    },
                    {
                        "internalType": "uint256",
                        "name": "block_num",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint64",
                        "name": "timestamp",
                        "type": "uint64"
                    },
                    {
                        "internalType": "bool",
                        "name": "status",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "isOwner",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "last_mint_time",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "locked",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address[]",
                        "name": "_owners",
                        "type": "address[]"
                    },
                    {
                        "internalType": "uint256",
                        "name": "required",
                        "type": "uint256"
                    }
                ],
                "name": "modifyConsensus",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "next_outgoing_message_id",
                "outputs": [
                    {
                        "internalType": "uint64",
                        "name": "",
                        "type": "uint64"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "name": "numOfConfirmed",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint64",
                        "name": "",
                        "type": "uint64"
                    }
                ],
                "name": "outbound",
                "outputs": [
                    {
                        "internalType": "bytes",
                        "name": "message",
                        "type": "bytes"
                    },
                    {
                        "internalType": "uint256",
                        "name": "block_num",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint64",
                        "name": "timestamp",
                        "type": "uint64"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "owners",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint64",
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "internalType": "bytes",
                        "name": "_message",
                        "type": "bytes"
                    }
                ],
                "name": "pushInboundMessage",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "required_sigs",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address payable",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "sendEther",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint64",
                        "name": "tokenId",
                        "type": "uint64"
                    }
                ],
                "name": "sendToken",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "tokens",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "total_message_received",
                "outputs": [
                    {
                        "internalType": "uint64",
                        "name": "",
                        "type": "uint64"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "total_period_mint",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "total_tokens",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "updateOwner",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_maxMintAllowed",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_period",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_maxMintPeriodAmount",
                        "type": "uint256"
                    }
                ],
                "name": "updateTokenParams",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "stateMutability": "payable",
                "type": "receive"
            }
        ];
        case process.env.BIN_CONTRACT_ADD : 
        return [
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_token_address",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_max_mint_period_amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_max_mint_period",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_max_mint_allowed",
                        "type": "uint256"
                    }
                ],
                "name": "addNewToken",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "changeLockStatus",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "claimGas",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint64",
                        "name": "tokenId",
                        "type": "uint64"
                    }
                ],
                "name": "claimToken",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address[]",
                        "name": "_owners",
                        "type": "address[]"
                    },
                    {
                        "internalType": "uint8",
                        "name": "_required_sigs",
                        "type": "uint8"
                    },
                    {
                        "internalType": "address[]",
                        "name": "_token_contracts",
                        "type": "address[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "_max_mint_period_amount",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "_max_mint_period",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "_max_mint_allowed",
                        "type": "uint256[]"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "bytes",
                        "name": "reason",
                        "type": "bytes"
                    }
                ],
                "name": "Failure",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address[]",
                        "name": "_owners",
                        "type": "address[]"
                    },
                    {
                        "internalType": "uint256",
                        "name": "required",
                        "type": "uint256"
                    }
                ],
                "name": "modifyConsensus",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint64",
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "internalType": "bytes",
                        "name": "_message",
                        "type": "bytes"
                    }
                ],
                "name": "pushInboundMessage",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes",
                        "name": "reason",
                        "type": "bytes"
                    }
                ],
                "name": "Receipt",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes",
                        "name": "reason",
                        "type": "bytes"
                    }
                ],
                "name": "Refund",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address payable",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "sendEther",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "updateOwner",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_maxMintAllowed",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_period",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_maxMintPeriodAmount",
                        "type": "uint256"
                    }
                ],
                "name": "updateTokenParams",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint64",
                        "name": "tokenId",
                        "type": "uint64"
                    }
                ],
                "name": "withdrawToken",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "stateMutability": "payable",
                "type": "receive"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint64",
                        "name": "",
                        "type": "uint64"
                    }
                ],
                "name": "altered",
                "outputs": [
                    {
                        "internalType": "bytes",
                        "name": "message",
                        "type": "bytes"
                    },
                    {
                        "internalType": "address",
                        "name": "signer",
                        "type": "address"
                    },
                    {
                        "internalType": "uint64",
                        "name": "timestamp",
                        "type": "uint64"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "uint64",
                        "name": "",
                        "type": "uint64"
                    }
                ],
                "name": "claimableTokens",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "configs",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "max_mint_allowed",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "max_mint_period_amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "max_mint_period",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "contractOwner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "name": "executedMsg",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "gas_used",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint64",
                        "name": "message_id",
                        "type": "uint64"
                    }
                ],
                "name": "getMessage",
                "outputs": [
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    },
                    {
                        "internalType": "uint256",
                        "name": "block_num",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "uint64",
                        "name": "timestamp",
                        "type": "uint64"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "hasConfirmed",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint64",
                        "name": "",
                        "type": "uint64"
                    }
                ],
                "name": "inbound",
                "outputs": [
                    {
                        "internalType": "bytes",
                        "name": "message",
                        "type": "bytes"
                    },
                    {
                        "internalType": "uint256",
                        "name": "block_num",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint64",
                        "name": "timestamp",
                        "type": "uint64"
                    },
                    {
                        "internalType": "bool",
                        "name": "status",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "isOwner",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "last_mint_time",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "locked",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "next_outgoing_message_id",
                "outputs": [
                    {
                        "internalType": "uint64",
                        "name": "",
                        "type": "uint64"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "name": "numOfConfirmed",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint64",
                        "name": "",
                        "type": "uint64"
                    }
                ],
                "name": "outbound",
                "outputs": [
                    {
                        "internalType": "bytes",
                        "name": "message",
                        "type": "bytes"
                    },
                    {
                        "internalType": "uint256",
                        "name": "block_num",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint64",
                        "name": "timestamp",
                        "type": "uint64"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "owners",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "required_sigs",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "tokens",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "total_message_received",
                "outputs": [
                    {
                        "internalType": "uint64",
                        "name": "",
                        "type": "uint64"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "total_period_mint",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "total_tokens",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ];
        case "default" : "Wrong Contract Address";
    }
}