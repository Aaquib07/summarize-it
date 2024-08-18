import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Summarize-it.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
          <Link to={'/'}><img src={ Logo } alt="" /></Link>    
        </div>
        <div className="nav-items">
            <ul className='item-list'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar