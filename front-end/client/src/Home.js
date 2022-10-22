import { useState, useEffect, useInsertionEffect } from "react";
import Users from "./User";
import "./CSS/User.css"
import useFetch from "./useFetch";

const Home = () => {
   const {data: user,isLoading} = useFetch('http://localhost:8000/users')

    return(
        <div className="home">
            <h1 className="center">User List</h1>
            {isLoading && <div>Loading...</div>} 
            {user && <Users user={user} title="User List"/>}
        </div>
    );

}

   

export default Home;