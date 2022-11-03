const Web3 = require("web3")
const Web3Quorum = require("web3js-quorum")
const fs = require("fs")
const path = require("path")
const InformationAbi = require("../contract/information_abi.json")
const dotenv = require("dotenv")
dotenv.config({path: '../.env'})


const storeValue = async (req, res) => {
    try {
    const {enclave, privateKey, contracAdress,data} = req.body
    const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6WyIqOioiXSwicHJpdmFjeVB1YmxpY0tleSI6ImtlaU5neHhFVmJXMWZ6cDBiOGFOajFuNUp4TituMVB3U29JVGlQcnVZaFU9IiwiZXhwIjoxNjAwODk5OTk5MDAyfQ.ecswcSuGAwsPnX9D0A9OBGXn6zJ91xwaCp44WNyMbwkvGONSu_R8-8W2vhMM6v0EW-rIaNDroimIHJ32wCTGdZlWN5XAOcbKUt54LhfMknaC1E1jz3KNISnZCUKOjl6UBgwSdnZPtTpNG4ByV3mNZv7KAtKOCsHNE3KuAmIG8uOTLfA175gxzJ0IatniNt5xKJbDZZmBomoxatmAG0ZK8vAkvBo9Ri3fSr3-2PnZ75oWMB2HMyq4IgWooj2Sji7uzoK7Aqq97p6UhFhbo5iCXOrw3R8g357XzrUUmts8FkSr3bqWGAyM_8jo1A0xzBwLdiG0THkQZ-ig2324sVCgCA"
    const{createHttpProvider} = require('./helper')
    console.log('tessera =', enclave)
    console.log('contract adress =', data)
    // res.status(200).json({message: data})
    
    // const web3 = new Web3Quorum(new Web3("http://127.0.0.1:8545"))
    const web3 = new Web3Quorum(new Web3(createHttpProvider(token,"http://127.0.0.1:8545")))
    const contract = new web3.eth.Contract(InformationAbi)
    
    //console.log(contract)


    const contractAbi = contract._jsonInterface.find((e) => {
        return e.name === "setName";
    })
    console.log("abi func instance: ",contractAbi)

    //const inputContract = Buffer.from(JSON.stringify(contractAbi.inputs)) // fix problem recive undefine
    //console.log("abi json",inputContract)


    const functionAgr = web3.eth.abi.encodeParameters(contractAbi.inputs, ['nammon']).slice(2) // "Nammon" is [value]

    const decode = web3.eth.abi.decodeParameter('string', '000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000066e616d6d6f6e0000000000000000000000000000000000000000000000000000');
    console.log("message :",decode)

    console.log("func arg : ",functionAgr)
    console.log("func arg signatur: ",contractAbi.signature)
    const byteData = contractAbi.signature + functionAgr
    
    console.log("byte data: ",byteData)

    

    const functionCall = {
        to: data,
        data: contractAbi.signature + functionAgr,
        privateKeyFrom: "VazacdLe/IK9Lpq7K7WkNR5Lhf6gnl23ESovCES/9gY=", // enclave node 1
        privateFor: ["keiNgxxEVbW1fzp0b8aNj1n5JxN+n1PwSoITiPruYhU="], 
        privateKey: "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3"
    }
    
    return await web3.priv
        .generateAndSendRawTransaction(functionCall)
        .then((transactionHash) => {
            console.log("transaction Hash:", transactionHash)
            return web3.priv.waitForTransactionReceipt(transactionHash)
        })
        .then((result) => {
            console.log("set name in contract: ", result.log[0].data)
       
            return result
            
        })
    } catch(err) {
        console.error(err.message)
        if(err.name === 'Unauthorized'){
            res.status(401).json({message: err})
        }
        else{
            res.status(400).json({message: err})
        }
    }


    if (require.main === module) {
        module.exports();
      }
    
    
}



module.exports = {storeValue}

// check point 
// change .abi in .json 