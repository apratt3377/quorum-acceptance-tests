var contract_json = {
    "contracts": {
        "src/SimpleEvent.sol:SimpleStoreEvent": {
            "abi": "[{\"constant\":false,\"inputs\":[{\"name\":\"_x\",\"type\":\"uint256\"}],\"name\":\"set\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"get\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_x\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"msg\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"LogSet\",\"type\":\"event\"}]",
            "bin": "608060405234801561001057600080fd5b506040516020806101a483398101806040528101908080519060200190929190505050806000819055505061015a8061004a6000396000f30060806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b1146100515780636d4ce63c1461007e575b600080fd5b34801561005d57600080fd5b5061007c600480360381019080803590602001909291905050506100a9565b005b34801561008a57600080fd5b50610093610125565b6040518082815260200191505060405180910390f35b7f446ca621af471b81ed3b6ae41d33349b4a872bb20f2eae9a2be6cdd82db0901f6000546040518080602001838152602001828103825260118152602001807f53657474696e672076616c756520746f200000000000000000000000000000008152506020019250505060405180910390a18060008190555050565b600080549050905600a165627a7a72305820f03a2932003a44ed4a714998be3262f9d76a612c0fda61f9bea0be32aa7203280029",
            "bin-runtime": "60806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b1146100515780636d4ce63c1461007e575b600080fd5b34801561005d57600080fd5b5061007c600480360381019080803590602001909291905050506100a9565b005b34801561008a57600080fd5b50610093610125565b6040518082815260200191505060405180910390f35b7f446ca621af471b81ed3b6ae41d33349b4a872bb20f2eae9a2be6cdd82db0901f6000546040518080602001838152602001828103825260118152602001807f53657474696e672076616c756520746f200000000000000000000000000000008152506020019250505060405180910390a18060008190555050565b600080549050905600a165627a7a72305820f03a2932003a44ed4a714998be3262f9d76a612c0fda61f9bea0be32aa7203280029",
            "srcmap": "26:298:0:-;;;114:63;8:9:-1;5:2;;;30:1;27;20:12;5:2;114:63:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;170:2;166:1;:6;;;;114:63;26:298;;;;;;",
            "srcmap-runtime": "26:298:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;237:85;;8:9:-1;5:2;;;30:1;27;20:12;5:2;237:85:0;;;;;;;;;;;;;;;;;;;;;;;;;;181:52;;8:9:-1;5:2;;;30:1;27;20:12;5:2;181:52:0;;;;;;;;;;;;;;;;;;;;;;;237:85;275:30;303:1;;275:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;315:2;311:1;:6;;;;237:85;:::o;181:52::-;205:7;227:1;;220:8;;181:52;:::o"
        }
    },
    "sourceList": ["src/SimpleEvent.sol"],
    "sources": {
        "src/SimpleEvent.sol": {
            "AST": {
                "attributes": {
                    "absolutePath": "src/SimpleEvent.sol",
                    "exportedSymbols": {"SimpleStoreEvent": [43]}
                },
                "children": [{
                    "attributes": {"literals": ["solidity", "^", "0.4", ".18"]},
                    "id": 1,
                    "name": "PragmaDirective",
                    "src": "0:24:0"
                }, {
                    "attributes": {
                        "baseContracts": [null],
                        "contractDependencies": [null],
                        "contractKind": "contract",
                        "documentation": null,
                        "fullyImplemented": true,
                        "linearizedBaseContracts": [43],
                        "name": "SimpleStoreEvent",
                        "scope": 44
                    },
                    "children": [{
                        "attributes": {
                            "constant": false,
                            "name": "x",
                            "scope": 43,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "uint256",
                            "value": null,
                            "visibility": "internal"
                        },
                        "children": [{
                            "attributes": {"name": "uint256", "type": "uint256"},
                            "id": 2,
                            "name": "ElementaryTypeName",
                            "src": "55:7:0"
                        }],
                        "id": 3,
                        "name": "VariableDeclaration",
                        "src": "55:9:0"
                    }, {
                        "attributes": {"anonymous": false, "documentation": null, "name": "LogSet"},
                        "children": [{
                            "children": [{
                                "attributes": {
                                    "constant": false,
                                    "indexed": false,
                                    "name": "msg",
                                    "scope": 9,
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "type": "string",
                                    "value": null,
                                    "visibility": "internal"
                                },
                                "children": [{
                                    "attributes": {"name": "string", "type": "string"},
                                    "id": 4,
                                    "name": "ElementaryTypeName",
                                    "src": "82:6:0"
                                }],
                                "id": 5,
                                "name": "VariableDeclaration",
                                "src": "82:10:0"
                            }, {
                                "attributes": {
                                    "constant": false,
                                    "indexed": false,
                                    "name": "value",
                                    "scope": 9,
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "type": "uint256",
                                    "value": null,
                                    "visibility": "internal"
                                },
                                "children": [{
                                    "attributes": {"name": "uint256", "type": "uint256"},
                                    "id": 6,
                                    "name": "ElementaryTypeName",
                                    "src": "94:7:0"
                                }],
                                "id": 7,
                                "name": "VariableDeclaration",
                                "src": "94:13:0"
                            }], "id": 8, "name": "ParameterList", "src": "81:27:0"
                        }],
                        "id": 9,
                        "name": "EventDefinition",
                        "src": "69:40:0"
                    }, {
                        "attributes": {
                            "constant": false,
                            "documentation": null,
                            "implemented": true,
                            "isConstructor": true,
                            "modifiers": [null],
                            "name": "SimpleStoreEvent",
                            "payable": false,
                            "scope": 43,
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [{
                            "children": [{
                                "attributes": {
                                    "constant": false,
                                    "name": "_x",
                                    "scope": 19,
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "type": "uint256",
                                    "value": null,
                                    "visibility": "internal"
                                },
                                "children": [{
                                    "attributes": {"name": "uint256", "type": "uint256"},
                                    "id": 10,
                                    "name": "ElementaryTypeName",
                                    "src": "141:7:0"
                                }],
                                "id": 11,
                                "name": "VariableDeclaration",
                                "src": "141:10:0"
                            }], "id": 12, "name": "ParameterList", "src": "140:12:0"
                        }, {
                            "attributes": {"parameters": [null]},
                            "children": [],
                            "id": 13,
                            "name": "ParameterList",
                            "src": "160:0:0"
                        }, {
                            "children": [{
                                "children": [{
                                    "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "operator": "=",
                                        "type": "uint256"
                                    },
                                    "children": [{
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [null],
                                            "referencedDeclaration": 3,
                                            "type": "uint256",
                                            "value": "x"
                                        }, "id": 14, "name": "Identifier", "src": "166:1:0"
                                    }, {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [null],
                                            "referencedDeclaration": 11,
                                            "type": "uint256",
                                            "value": "_x"
                                        }, "id": 15, "name": "Identifier", "src": "170:2:0"
                                    }],
                                    "id": 16,
                                    "name": "Assignment",
                                    "src": "166:6:0"
                                }], "id": 17, "name": "ExpressionStatement", "src": "166:6:0"
                            }], "id": 18, "name": "Block", "src": "160:17:0"
                        }],
                        "id": 19,
                        "name": "FunctionDefinition",
                        "src": "114:63:0"
                    }, {
                        "attributes": {
                            "constant": false,
                            "documentation": null,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [null],
                            "name": "get",
                            "payable": false,
                            "scope": 43,
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [{
                            "attributes": {"parameters": [null]},
                            "children": [],
                            "id": 20,
                            "name": "ParameterList",
                            "src": "193:2:0"
                        }, {
                            "children": [{
                                "attributes": {
                                    "constant": false,
                                    "name": "",
                                    "scope": 27,
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "type": "uint256",
                                    "value": null,
                                    "visibility": "internal"
                                },
                                "children": [{
                                    "attributes": {"name": "uint256", "type": "uint256"},
                                    "id": 21,
                                    "name": "ElementaryTypeName",
                                    "src": "205:7:0"
                                }],
                                "id": 22,
                                "name": "VariableDeclaration",
                                "src": "205:7:0"
                            }], "id": 23, "name": "ParameterList", "src": "204:9:0"
                        }, {
                            "children": [{
                                "attributes": {"functionReturnParameters": 23},
                                "children": [{
                                    "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [null],
                                        "referencedDeclaration": 3,
                                        "type": "uint256",
                                        "value": "x"
                                    }, "id": 24, "name": "Identifier", "src": "227:1:0"
                                }],
                                "id": 25,
                                "name": "Return",
                                "src": "220:8:0"
                            }], "id": 26, "name": "Block", "src": "214:19:0"
                        }],
                        "id": 27,
                        "name": "FunctionDefinition",
                        "src": "181:52:0"
                    }, {
                        "attributes": {
                            "constant": false,
                            "documentation": null,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [null],
                            "name": "set",
                            "payable": false,
                            "scope": 43,
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [{
                            "children": [{
                                "attributes": {
                                    "constant": false,
                                    "name": "_x",
                                    "scope": 42,
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "type": "uint256",
                                    "value": null,
                                    "visibility": "internal"
                                },
                                "children": [{
                                    "attributes": {"name": "uint256", "type": "uint256"},
                                    "id": 28,
                                    "name": "ElementaryTypeName",
                                    "src": "251:7:0"
                                }],
                                "id": 29,
                                "name": "VariableDeclaration",
                                "src": "251:10:0"
                            }], "id": 30, "name": "ParameterList", "src": "250:12:0"
                        }, {
                            "attributes": {"parameters": [null]},
                            "children": [],
                            "id": 31,
                            "name": "ParameterList",
                            "src": "264:0:0"
                        }, {
                            "children": [{
                                "children": [{
                                    "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "isStructConstructorCall": false,
                                        "lValueRequested": false,
                                        "names": [null],
                                        "type": "tuple()",
                                        "type_conversion": false
                                    },
                                    "children": [{
                                        "attributes": {
                                            "argumentTypes": [{
                                                "typeIdentifier": "t_stringliteral_73e82a72da81751f0a26e78a74c61683eaf59635781227f0fadd5d923193abbc",
                                                "typeString": "literal_string \"Setting value to \""
                                            }, {"typeIdentifier": "t_uint256", "typeString": "uint256"}],
                                            "overloadedDeclarations": [null],
                                            "referencedDeclaration": 9,
                                            "type": "function (string memory,uint256)",
                                            "value": "LogSet"
                                        }, "id": 32, "name": "Identifier", "src": "275:6:0"
                                    }, {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "hexvalue": "53657474696e672076616c756520746f20",
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "subdenomination": null,
                                            "token": "string",
                                            "type": "literal_string \"Setting value to \"",
                                            "value": "Setting value to "
                                        }, "id": 33, "name": "Literal", "src": "282:19:0"
                                    }, {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [null],
                                            "referencedDeclaration": 3,
                                            "type": "uint256",
                                            "value": "x"
                                        }, "id": 34, "name": "Identifier", "src": "303:1:0"
                                    }],
                                    "id": 35,
                                    "name": "FunctionCall",
                                    "src": "275:30:0"
                                }], "id": 36, "name": "EmitStatement", "src": "270:35:0"
                            }, {
                                "children": [{
                                    "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "operator": "=",
                                        "type": "uint256"
                                    },
                                    "children": [{
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [null],
                                            "referencedDeclaration": 3,
                                            "type": "uint256",
                                            "value": "x"
                                        }, "id": 37, "name": "Identifier", "src": "311:1:0"
                                    }, {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [null],
                                            "referencedDeclaration": 29,
                                            "type": "uint256",
                                            "value": "_x"
                                        }, "id": 38, "name": "Identifier", "src": "315:2:0"
                                    }],
                                    "id": 39,
                                    "name": "Assignment",
                                    "src": "311:6:0"
                                }], "id": 40, "name": "ExpressionStatement", "src": "311:6:0"
                            }], "id": 41, "name": "Block", "src": "264:58:0"
                        }],
                        "id": 42,
                        "name": "FunctionDefinition",
                        "src": "237:85:0"
                    }],
                    "id": 43,
                    "name": "ContractDefinition",
                    "src": "26:298:0"
                }],
                "id": 44,
                "name": "SourceUnit",
                "src": "0:325:0"
            }
        }
    },
    "version": "0.4.23+commit.124ca40d.Linux.g++"
}

console.log('getting abi')
console.log(contract_json.contracts)
var abi = contract_json.contracts['src/SimpleEvent.sol:SimpleStoreEvent'].abi
console.log('parse abi')
var contract = eth.contract(JSON.parse(abi))
console.log('get bin ')
var bin = "0x" + contract_json.contracts['src/SimpleEvent.sol:SimpleStoreEvent'].bin

personal.unlockAccount(eth.accounts[0])

var deployTransationObject = {
    from: eth.accounts[0],
    data: bin,
    gas: 1000000,
    privateFor: ["ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="]
};
var instance = contract.new(16, deployTransationObject, function (e, contract) {
    if (e) {
        console.log("err creating contract", e);
    } else {
        if (!contract.address) {
            console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
        } else {
            console.log("Contract mined! Address: " + contract.address);
            console.log(contract);
        }
    }
});
