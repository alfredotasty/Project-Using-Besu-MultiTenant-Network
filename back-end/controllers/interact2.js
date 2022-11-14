const Web3 = require('web3');
const fs = require('fs');
const Web3Quorum = require('web3js-quorum');
const { createHttpProvider } = require('web3js-quorum/example/helpers');
// const abi = JSON.parse(fs.readFileSync('./contract/information_sol_information.abi', 'utf-8'));
const abi= JSON.parse(fs.readFileSync('../contract/information_sol_information.abi','utf-8'));
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
      console.log('Transaction Hash:', privateTxHash);
      res.status(200).json({message: privateTxHash})
      return web3.priv.waitForTransactionReceipt(privateTxHash);
    })
    .then((result) => {
      return console.log(result);
    })
    .catch((err) => {
        if(err.name === 'Unauthorized'){
            res.status(401).json({message: err})
        }
        else{
            res.status(400).json({message: err})
        }
    })
};  
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJwZXJtaXNzaW9ucyI6WyIqOioiLCJldGg6YmxvY2tOdW1iZXIiXSwidXNlcm5hbWUiOiJ1c2VybmFtZTEiLCJwcml2YWN5UHVibGljS2V5IjoiVXFqRlFudGE4Yk1GRC9xbGI2eElwYUdUdE1SNVM4anR5V1dsM0tCNHBRQT0iLCJpYXQiOjE2Njg0NjE1ODcsImV4cCI6MTY2ODQ2MTg4N30.brvItJte-v8wME0cJQkBGvpVavKyxivrfXUB3yX28DcuJu9atunHuO6o2bOkbvZznr3uRDTtwq92aGP27j8GsrmWLMJwn-JLWTNshuU-3PKVXXNOUu0IC3yPgx_x-Cdbo5tXVJK9XOPRiT5xdObsqT1jey7ED5so1DsneWc13Ur27lBEZYJI2do09gn6Wpag_HvrY00xW1TpIZVE_ttWx0gPHnN_NUWsZAmDxsfkzX9WIzAT4e7cbvmdDcnI0PHtAIc7b9a4dNNcXwTopwkEQFiARkBKHnqqJJQZspIDSvooKz_KoHCWIVCBuJBTa_PrR1y0w0B7y8bWG7D3XHiIoA"
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
    res.status(200).json({message: r})
  return r;
});

console.log(callGreetFunctionResult);