import { useEffect, useState } from "react";

const SmartContractFrom = (data) => {
    const [addr,setAddr] = useState(null)
    useEffect(() => {
        setAddr(data)
    })
    console.log("samrt contract form",data)
    console.log("addr", addr)
    
    return ( 
        <div className='square'>
        <form className='smartcontract'>
            <h1>Smart Contract Field</h1>
            {addr && <p>Address is {addr.message} </p>}
            <label>Name</label>
            <input
                type="text"
            />
            <button className="button">submit</button>

        </form>
        <form className='smartcontract'>
            <label>Age</label>
            <input
                type="text"
            />
            <button className="button">submit</button>
        </form>
        <form className='smartcontract'>
            <label>Blood Group</label>
            <input
                type="text"
            />
            <button className="button">submit</button>
        </form>
    </div>
     );
}
 
export default SmartContractFrom;