const Web3 = require("web3")
const Web3Quorum = require("web3js-quorum")
const fs = require("fs")
const path = require("path")
const { createHttpProvider } = require('./helper');
// const InformationAbi = require("../contract/information_sol_information.abi")
const dotenv = require("dotenv")
dotenv.config({path: '../.env'})
const abi= JSON.parse(fs.readFileSync('./contract/information_sol_information.abi','utf-8'));

const storeValue = async (req, res) => {
    try {
        const callGenericFunctionOnContract = async (
            web3,
            privateFrom,
            privateKey,
            address,
            privacyGroupId,
            method,
            value
          ) => {
            const contract = new web3.eth.Contract(abi);
          
            const functionAbi = contract._jsonInterface.find((e) => {
              return e.name === method;
            });
          
            const functionArgs =
              value !== null
                ? web3.eth.abi.encodeParameters(functionAbi.inputs, [value]).slice(2)
                : null;
          
            const functionCall = {
              to: address,
              data:
                functionArgs !== null
                  ? functionAbi.signature + functionArgs
                  : functionAbi.signature,
              privateFrom,
              privateKey,
              privacyGroupId,
            };
            return web3.priv
              .generateAndSendRawTransaction(functionCall)
              .then((privateTxHash) => {
                //res.status(200).json({message:privateTxHash})
                console.log('Transaction Hash:', privateTxHash);
                return web3.priv.waitForTransactionReceipt(privateTxHash);
              })
              .then((result) => {
                const blockDemical = parseInt(result.blockNumber,16)
                res.status(200).json({message:blockDemical})
                return console.log(result.blockDemical);
              })
              .catch((err) => {
                  console.log(err.message)
              })
          };  
          const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJwZXJtaXNzaW9ucyI6WyIqOioiLCJldGg6YmxvY2tOdW1iZXIiXSwidXNlcm5hbWUiOiJ1c2VybmFtZTEiLCJwcml2YWN5UHVibGljS2V5IjoiVXFqRlFudGE4Yk1GRC9xbGI2eElwYUdUdE1SNVM4anR5V1dsM0tCNHBRQT0iLCJpYXQiOjE2Njg0NjYyNzcsImV4cCI6MTY2ODQ2NjU3N30.V5i7IFV8pUZl8gCNwsc_h5nFCzgnDsNob6LJlq93z_jtVatH4K6SI_vv--CK8gkL1Nw8HmMXzFNiY9coxTjnQOQqUcqXuJ1F6Z_oTZcbRNlHbiO38D6bLBMvvGCaMeZQKN2J_E-FNahkCetY7boOi1WKcvZNcag8-Dg4gwxPA_44ttd_R02zu7khhVxtLfVH_-eTI8bT82vu4Li8ERxYTIINM8TySrrCIlKiogtxGA1hEviKaHvlLhH4H0UAf0Tp235ixfwDkyGMhJYWOlXDHojmzN1oOH7msFxSQw5bjEtz0DxYPm6QCZmTTjZmnI2PTIX7RNyvFlpcXRjFQrE66Q"
          const node1 = new Web3Quorum(
             
            new Web3(createHttpProvider(token, "http://127.0.0.1:8545"))
          );
          const txAddress = '0x7b1f4478dc6176550c3a770f62256f90e3451231';
          privacyGroupId = 'ntBayU2UDb/zCtLp1isGD1LZzTcIsAKs7OPGXmLLhEk=';
          const callGreetFunctionResult = callGenericFunctionOnContract(
            node1,
            "UqjFQnta8bMFD/qlb6xIpaGTtMR5S8jtyWWl3KB4pQA=",
            "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3",
            txAddress,
            privacyGroupId,
            'setName',
            'nammon'
          ).then((r) => {

            return r;
          });

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
       module.exports
      }   
}
module.exports = {storeValue}

// check point 
// change .abi in .json 