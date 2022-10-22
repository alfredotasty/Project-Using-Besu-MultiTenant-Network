const SmartContractFrom = () => {
    return ( 
        <div className='square'>
        <form className='smartcontract'>
            <h1>Smart Contract Feid</h1>
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