import React from 'react'
import './Register.scss'

const RegisterForm = () => {
  return (
    <div className='container' id='container'>
    <h1>Register an account</h1>
    <form className='reg-form' id='reg-form'>
    <label>First Name</label>
    <input type="firstName" />
    <label>Last Name</label>
    <input type="lastName" />
    <label>Email</label>
    <input type="email" />
    <label>Password</label>
    <input type="password" />
    <br/>
    <button className='reg-btn' id='reg-btn'>Confirm</button>
     </form>
    </div>
  )
}

export default RegisterForm