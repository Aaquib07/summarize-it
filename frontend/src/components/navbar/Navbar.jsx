import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/Summarize-it.png'
import { useAuth } from '../../context/auth/AuthContext'

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className='navbar'>
        <div className="logo">
          <Link to={'/'}>
            <h1>Summarizit</h1>
          </Link>    
        </div>
        <div className="nav-items">
            <ul className='item-list'>
                <li><Link to={'/'}>Home</Link></li>
                {isAuthenticated && (
                  <li><Link to={'/dashboard'}>Dashboard</Link></li>
                )}
                <li><Link to={'/about'}>About</Link></li>
                {isAuthenticated && (
                  <li><Link to={'/login'} onClick={handleLogout}>Logout</Link></li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default Navbar