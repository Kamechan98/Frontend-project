import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.svg';
import './Nav.scss'

const Nav = () => {
  return (
    <div>
        <nav className='nav-bar' id='nav-bar'>
            <img className='logo-img' id='logo-img' src={logo} alt="logo" />
            <div className='nav-links' id='nav-links'>
            <p><Link to="/login">Login</Link></p>
            <p><Link to="/orders">Profile</Link></p>
            </div>
        </nav>
    </div>
  )
}

export default Nav