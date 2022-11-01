const Web3 = require("web3")
const Web3Quorum = require("web3js-quorum")
const fs = require("fs")
const path = require("path")
const InformationAbi = require("../contract/information_abi.abi")
const dotenv = require("dotenv")
dotenv.config({path: '../.env'})


const storeValue = (req, res) => {
    const {enclave, privateKey, contracAdress} = req.body
    console.log('tessera =', enclave)
    console.log('privateKey =', privateKey)
    console.log('contract adress =', contracAdress)
    res.status(200).json({message:'back-end recive basic value!!'})
    
    if (require.main === module) {
        module.exports();
      } 
}

module.exports = {storeValue}