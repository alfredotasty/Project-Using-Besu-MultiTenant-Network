// const Web3 = require("web3")
// const Web3Quorum = require("web3js-quorum")
// const fs = require("fs")
// const path = require("path")
// // const InformationAbi = require("../contract/information_sol_information.abi")
// const dotenv = require("dotenv")
// dotenv.config({path: '../.env'})
// const abi = JSON.parse(fs.readFileSync('./contract/information_sol_information.abi','utf-8'));

// const storeValue = async (req, res) => {
//     try {
//     const {enclave, privateKey, contracAdress,data} = req.body
//     const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJwZXJtaXNzaW9ucyI6WyIqOioiLCJldGg6YmxvY2tOdW1iZXIiXSwidXNlcm5hbWUiOiJ1c2VybmFtZTEiLCJwcml2YWN5UHVibGljS2V5IjoiVXFqRlFudGE4Yk1GRC9xbGI2eElwYUdUdE1SNVM4anR5V1dsM0tCNHBRQT0iLCJpYXQiOjE2Njg0NTIwNjYsImV4cCI6MTY2ODQ1MjM2Nn0.S7V5wR8SUpA4GOTdwHCt4OGQekiK9uMNx_mM1kutIbNPgp7InaHMK9-FwqtqdKF3e6Gmpv4M3k3W0_GF6_VrR1nV5QLsyKsES5hlCclXuWSD4DNo3TpHNH-vicuLzAipthOOFEjG1zH-3IQnQKlIsW3-o6YGxHDLtKRZieac5WeGKguCYHNzVFDy8fHgiMQi1X_QpyLyGFLEb3CGLCKbseX4I73xyoeaoQCD5T5xvKLExT1f4ZHQTyAHwE_nGfZjIvxpMJtnc6AaAppjFpJlwWUu1cqHntRdbwNkoIgZcLUt1EGHAAw9vAe6CodS9mkTaUUxIATFRF4WJa1HUQ3MpQ"
//     const{createHttpProvider} = require('./helper')
//     console.log('tessera =', enclave)
//     console.log('contract adress =', data)
//     // res.status(200).json({message: data})
    
//     // const web3 = new Web3Quorum(new Web3("http://127.0.0.1:8545"))
//     const web3 = new Web3Quorum(new Web3(createHttpProvider(token,"http://127.0.0.1:8545")))

//     // const rawContract = fs.readFileSync('',"utf-8")
//     // const contractJSON = JSON.parse(rawContract)
//     const contract = new web3.eth.Contract(abi)
    
//     //console.log(contract)


//     const contractAbi = contract._jsonInterface.find((e) => {
//         return e.name === "setName";
//     })
//     console.log("abi func instance: ",contractAbi)

//     //const inputContract = Buffer.from(JSON.stringify(contractAbi.inputs)) // fix problem recive undefine
//     //console.log("abi json",inputContract)


//     const functionAgr = web3.eth.abi.encodeParameter('string', 'nammon') // "Nammon" is [value]

//     const decode = web3.eth.abi.decodeParameter('string', '000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000066e616d6d6f6e0000000000000000000000000000000000000000000000000000');
//     console.log("message :",decode)

//     console.log("func arg : ",functionAgr)
//     console.log("func arg signatur: ",contractAbi.signature)
//     const byteData = contractAbi.signature + functionAgr
//     console.log("byte data: ",byteData)

    

//     const functionCall = {
//         to: data,
//         data: contractAbi.signature + functionAgr,
//         privateKeyFrom: "UqjFQnta8bMFD/qlb6xIpaGTtMR5S8jtyWWl3KB4pQA=", // enclave node 1
//         privateFor: ["R4l0mId31cjRDZaULS+KW2B9p2TVfmBYMf4h2pTaizc="], 
//         privateKey: "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3"
//     }
    
//     return await web3.priv
//         .generateAndSendRawTransaction(functionCall)
//         .then((transactionHash) => {
//             console.log("transaction Hash:", transactionHash)
//             return web3.priv.waitForTransactionReceipt(transactionHash)
//         })
//         .then((result) => {
//             console.log("set name in contract: ", result.log[0].data)
       
//             return result
            
//         })
//     } catch(err) {
//         console.error(err.message)
//         if(err.name === 'Unauthorized'){
//             res.status(401).json({message: err})
//         }
//         else{
//             res.status(400).json({message: err})
//         }
//     }


//     if (require.main === module) {
//         module.exports();
//       }
    
    
// }



// module.exports = {storeValue}

// // check point 
// // change .abi in .json 