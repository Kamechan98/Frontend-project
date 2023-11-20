import React from 'react'
import logo from '../../assets/Logo.svg';
import location from '../../assets/Location_marker.svg';
import phone from '../../assets/Phone_logo.svg';
import mail from '../../assets/Mail_logo.svg';
import facebook from '../../assets/Facebook_logo.svg';
import twitter from '../../assets/Twitter_icon.svg';
import instagram from '../../assets/Instagram_logo.svg';
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
        <div className='ft-container'>
        <div className='contact-us ft-containers' id='contact-us'>
        <h3>Contact Us</h3>
        <br/>
        <p className='link'id='link'> Northernnest Retreats</p>
        <br/>
        <div className='adress' id='adress'> 
        <img src={location} alt=""/>
        <p> Norrskensvägen 235
        235 00 Åre 
        Sweden 
        </p>
        </div>
        <div className='phone' id='phone'>
        <img src={phone} alt=""/>
        <p> +46 123 423 024</p>
        </div>
        <br/>
        <div className='email' id='email'>
        <img src={mail} alt=""/>
        <p> contact@northernnest.com</p>
        </div>
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
        <div className='social-medias' id='social-medias'>
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={instagram} alt="instagram" /> 
        </div>
        </div>
        
        </div>
        <p className='copyright'id='copyright'>© . 2023 NorthernNest Retreats. All Rights Reserved</p>
    </footer>
  )
}

export default Footer