import React from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'

const LoginForm = () => {
  return (
    <div className='container' id='container'>
      <h1>Log in to your account</h1>
    <form className='login-form' id='login-form'>
    <label>Email</label>
    <input type="email" />
    <label>Password</label>
    <input type="password" />
    <br/>
    <p className='login-link'>Don't have an account? <Link to="/register">Sign up here</Link></p>
    <br/>
    <button className='login-btn' id='login-btn'>Login</button>
     </form>
    </div>
  )
}

export default LoginForm