import React from 'react'
import logo from '../../assets/Logo.svg';
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
        <div className='ft-container'>
        <div className='contact-us ft-containers' id='contact-us'>
        <h3>Contact Us</h3>
        <br/>
        <p className='link'id='link'>Northernnest Retreats</p>
        <br/>
        <p className='adress' id='adress'>Norrskensvägen 235
        235 00 Åre 
        Sweden 
        </p>
        <p className='phone' id='phone'>+46 123 423 024</p>
        <br/>
        <p className='email' id='email'>contact@northernnest.com</p>
        </div>
        <br/>
        
        </div>
        <div className='ft-container'>
        <div className='newsletter ft-containers' id='newsletter'>
        <h3>Sign up for our Newsletter</h3>
        <input type="email" placeholder='enter email here'/>
        <button className='newsletter-btn' id='newsletter-btn'>Subscribe</button>
        <img className='logo-img' id='logo-img' src={logo} alt="logo" />
        </div>
        </div>
        <div className='ft-container'>
        <div className='follow-us ft-containers' id='follow-us'>
        <h3>Follow us</h3>  
        </div>
        
        </div>
        <p className='copyright'id='copyright'>© . 2023 NorthernNest Retreats. All Rights Reserved</p>
    </footer>
  )
}

export default Footer