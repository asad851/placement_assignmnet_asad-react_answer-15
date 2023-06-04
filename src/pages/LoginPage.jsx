import React from 'react'
import { useState } from 'react'

export default function LoginPage() {
    const [signedUp, setSignedUp] = useState(false)
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("")
    const handleSwitch=()=>{
        signedUp?setSignedUp(false):setSignedUp(true)
    }
  return (
    <div className='formBoxContainer'>
       <div className='formBox'>
         <form className='form'>
            {!signedUp&&
                <>

                <label htmlFor="name">Name :</label>
                  <input type="text" name="name" id="" tabIndex={1} placeholder='Enter your name'/>
                
                </>
            }
            
            <label htmlFor="email">Email :</label>
           <input type="email" name="email" id="" required tabIndex={2} placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}/>
            

            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="" required tabIndex={3} placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} />
            
            <button type='submit'>Submit</button>
         
         <span type="button" onClick={handleSwitch}> {signedUp?"Sign up":"Sign in"}</span>
         </form>
       </div>
    </div>
  )
}
