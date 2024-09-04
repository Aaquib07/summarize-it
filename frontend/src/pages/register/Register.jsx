import React, { useState } from 'react'
import './register.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

const Register = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const request = {
                name: name,
                username: username,
                password: password
            }
            const response = await axios.post(
                process.env.REACT_APP_API_URL + '/users/register', request,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            setPassword('')

            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 3000
            })

            setTimeout(() => {
                navigate('/login')
            }, 3000)
        } catch (error) {
            setPassword('')

            if (error.response && error.response.status === 400) {
                toast.error(error.response.data.message, {
                    position: 'top-right'
                })
            } else {
                toast.error('Something went wrong!', {
                    position: 'top-right'
                })
            }
        }
        
    }

  return (
    <div className='register'>
        <Navbar />
        <div className="register-details">
            <h1 className='register-header'>Register yourself</h1>
            <form className='register-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button className='btn-submit' type='submit'>Register</button>
            </form>
        </div>
        <Footer />
        <ToastContainer />
    </div>
  )
}

export default Register