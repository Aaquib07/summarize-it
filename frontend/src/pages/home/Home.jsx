import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/summarize')
  }

  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <h1>Welcome to your paragraph summarizer</h1>
        <p>Try it out if you haven't</p>
      </div>
      <div className="redirect">
        <button onClick={handleClick}>Let's Get Started </button>
      </div>
    </div>
  )
}

export default Home