import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import axios from 'axios';
const SmartContractFrom = (data) => {
 
    console.log("samrt contract form",data)
    
    const handleRequest = async () => {
    
        const respond = await axios.post('http://localhost:8081/interact/storeValue', data)
            .then( respond => {
                console.log("res from interact",respond.data.message)
                // console.log(data.data)
                Swal.fire({
                icon: 'success',
                title: "Interact Success!!",   
                text: respond.data.message,     
                confirmButtonColor: "#000000",   
                confirmButtonText: "OK",   
                })
         }).catch(err => {
            if(err.name === 'AxiosError'){
                // console.log('Unauthorize')
                Swal.fire({
                    icon: 'error',
                    title: "Error",  
                    text:"Pls check log",
                    confirmButtonColor: "#000000",   
                    confirmButtonText: "OK",   
                    })
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
      };

    return ( 
        
        <div className='square'>
            
            <form className='smartcontract'>
                <h1>Smart Contract Field</h1>
                {data && 
                    <div className="blueLinks">
            
                        <div className='square'>
                            <h2>Contract Address</h2>
                            <a href = {"https://etherscan.io/address/"+ data.data} target="_blank" rel="noopener noreferrer">{data.data}</a>
                        </div>
                        <div className='squareButton'>
                            <button type='button' className="buttonInteract" onSubmit={handleSubmit} onClick={ handleRequest}>interact with contract</button>
                        </div>         
                    </div>
                }
                <label>Name</label>
                <input type="text"/>
                <div className='squareButton'>
                    <button type="button" className="button">submit</button>
                </div>
            </form>
            <form className='smartcontract'>
                <label>Age</label>
                <input type="text"/>
                <div className='squareButton'>
                    <button className="button">submit</button>
                </div>
            </form>
            <form className='smartcontract'>
                <label>Blood Group</label>
                <input type="text"/>
                <div className='squareButton'>
                    <button className="button">submit</button>
                </div>
            </form>
        </div>
     );
}
 
export default SmartContractFrom;