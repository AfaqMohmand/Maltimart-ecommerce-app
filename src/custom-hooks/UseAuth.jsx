import React,{useState,useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '../firebase.config'
const UseAuth = () => {
    const [currentUser,SetCurrentUser]=useState()
    console.log("🚀 ~ file: UseAuth.jsx:6 ~ UseAuth ~ currentUser", currentUser)
    useEffect(() => {
      onAuthStateChanged(auth,(user)=>{
        if(user){
            SetCurrentUser(user)
        } else{
            SetCurrentUser(null)
        }
      })
    }, [])
    
  return (
    {currentUser}
  )
}

export default UseAuth