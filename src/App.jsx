import React from 'react'
import LoginPage from './pages/LoginPage'
import TaskManager from './pages/TaskManager'
import { useState,useEffect  } from 'react'


export default function App() {
  const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem("loggedIn")==='true'))
 
  
  useEffect(()=>{
    localStorage.setItem("loggedIn",JSON.stringify(loggedIn))
  },[loggedIn])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("username"))||"")
  
  return (
    <>
    {!loggedIn&&<LoginPage setLoggedIn={setLoggedIn} setUser={setUser}/>}
    {loggedIn&&<TaskManager userName={user} setLoggedIn={setLoggedIn}/>}
    </>
  )
}
