import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.svg';
import avatar from '../../assets/User_icon.svg'
import './Nav.scss'

const Nav = () => {
  return (
    <div>
        <nav className='nav-bar' id='nav-bar'>
          <a href="/"><img className='logo-img' id='logo-img' src={logo} alt="logo" /></a>
            <div className='nav-links' id='nav-links'>
            <p><Link to="/login">Login</Link></p>
            <p><Link to="/products">Our Cabins</Link></p>
            <Link to="/orders"> <img src={avatar} alt="avatar" /></Link>
            </div>
        </nav>
    </div>
  )
}

export default Nav