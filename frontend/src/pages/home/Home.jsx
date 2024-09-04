import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import { useAuth } from '../../context/auth/AuthContext'

const Home = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  const handleNavigation = (url) => {
    navigate(url)
  }

  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <div className="hero-header">
          <h1>Welcome to Summarizit</h1>
          <p>Simplify your reading with instant summaries</p>
        </div>
        <div className="redirect">
          <button className='btn-register' onClick={() => handleNavigation('/register')} disabled={isAuthenticated}>
            <p className='btn-header'>Register</p>
            <p className='btn-info'>Don't have an account ?</p>
          </button>
          <button className='btn-login' onClick={() => handleNavigation('/login')} disabled={isAuthenticated}>
            <p className='btn-header'>Login</p>
            <p className='btn-info'>Already have an account ?</p>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home