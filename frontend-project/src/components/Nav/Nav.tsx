import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.svg';
import avatar from '../../assets/User_icon.svg'
import './Nav.scss'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className='nav-bar'>
        <a href="/"><img className='logo-img' id='logo-img' src={logo} alt="logo" /></a>
        <input type="checkbox" id="menu-toggle" checked={menuOpen} onChange={handleMenuToggle} />
        <label htmlFor="menu-toggle" id="menu-toggle-label">&#9776; Menu</label>
        <div className={`nav-links ${menuOpen ? 'show' : ''}`} id='nav-links'>
          <p><Link to="/login">Login</Link></p>
          <p><Link to="/products">Our Cabins</Link></p>
          <Link to="/orders"> <img src={avatar} alt="avatar" /></Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav