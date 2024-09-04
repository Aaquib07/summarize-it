import React, { useState } from 'react'
import './login.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { useAuth } from '../../context/auth/AuthContext'

const Login = () => {
    const { isAuthenticated, login } = useAuth()

    console.log(isAuthenticated)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const request = {
            username: username,
            password: password
        }
        
        try {
            const response = await axios.post(
                process.env.REACT_APP_API_URL + '/users/login', request,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 1000
            })

            login()

            setPassword('')

            setTimeout(() => {
                navigate('/dashboard')
            }, 1000)

        } catch (error) {
            console.error(error)
            toast.error(error.response ? error.response.data.message : "An error occurred", {
                position: 'top-right'
            })
        } finally {
            setLoading(false)
        }
    }

  return (
    <div className='login'>
        <Navbar />
        <div className="login-details">
            <h1 className='login-header'>Get logged in</h1>
            <form className='login-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} required disabled={loading} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} required disabled={loading} />
                </div>
                <button className='btn-submit' type='submit' disabled={loading}>
                    {loading ? 'Logging in...' : 'Log In'}
                </button>
            </form>
        </div>
        <Footer />
        <ToastContainer />
    </div>
  )
}

export default Login