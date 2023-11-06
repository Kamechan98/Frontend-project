import React from 'react'
import './Login.scss'

const LoginForm = () => {
  return (
    <form className='login-form' id='login-form'>
    <label>Email</label>
    <input type="email" />
    <label>Password</label>
    <input type="password" />
    <br/>
    <button className='login-btn' id='login-btn'>Login</button>
     </form>
  )
}

export default LoginForm