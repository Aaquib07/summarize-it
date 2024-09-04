import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    console.log(isAuthenticated)

  return (
    isAuthenticated === 'true' ? <Outlet /> : <Navigate to={'/login'} />
  )
}

export default ProtectedRoute