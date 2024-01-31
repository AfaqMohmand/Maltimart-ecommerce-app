import React from 'react'
import { Navigate } from 'react-router-dom'
import UseAuth from '../custom-hooks/UseAuth'

const ProtectedRoute = ({children}) => {
    const {currentUser}=UseAuth()
  return currentUser ? children : <Navigate to='/login'/>
}

export default ProtectedRoute