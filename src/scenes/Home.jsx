import React,  {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App';


function Home() {
    
    const { user } = useContext(UserContext);
    console.log(user)
    return(
        <>
    
        <h1>Welcome, {user.displayName} </h1>
         
        
       <header> This is the home page</header>
            <Link to="/login" > Login </Link>
            <Link to="/signup" > sign up </Link>

           <div>
               
          
           </div>
        </>
    )
}

export default Home 