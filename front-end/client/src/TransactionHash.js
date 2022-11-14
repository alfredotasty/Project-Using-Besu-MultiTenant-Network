import { useState } from "react";

const TransactionHash = (data) => {
    console.log("TX hash",data)
    return (   
        <div className='square'>
            <div className="smartcontract">
                {data && <h1 className="container">Transaction Hash {data}</h1> }
                <p>Tx :</p>     
            </div>          
        </div>
    );
}
 
export default TransactionHash;