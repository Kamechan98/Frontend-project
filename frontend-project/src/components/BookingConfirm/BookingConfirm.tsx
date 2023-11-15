import React from 'react'
import Mastercard from '../../assets/mastercard.jpg';
import Klarna from '../../assets/Klarna.jpg';
import Paypal from '../../assets/Paypal.jpg';
import AmericanExpress from '../../assets/AmericanExpress.jpg';
import './BookingConfirm.scss'

const BookingConfirm = () => {
  return (
    <div className='container' id='container'>
    <h2 className='Booking-info-headline' id='Booking-info-headline'>Booking Information</h2>
    <div className='booking-dates'>
    <div className='check-in-dates' id='check-in-dates'>
    <h3>Check-in Date</h3>
    <p>Dates here</p>
    </div>
    <div className='check-out-dates' id='check-out-dates'>
    <h3>Check-out Date</h3>
    <p>Dates here</p>
    </div>
    </div>
    <div className='booking-info' id='booking-info'> 
    <h3>Chosen Cabin</h3>
    <p>Hidden Valley Andalucia</p>
    <p>ÅRE</p>
    <h3>Cabin Package</h3>
    <p>Insert package info here</p>
    <p>Price here</p>
    <h3>Guests</h3>
    <p>2 guests</p>
    <h3>Cancellation Protection Fee</h3>
    <p>500kr</p>
    <input type="radio" name="radio-btn" id="radio-btn" />
    <h3>Total Cost</h3>
    <p>Insert Cost</p>
    </div>
    <div className='booking-form' id='booking-form'>
    <form className='form' id='form'>
        <label htmlFor="FullName">Full Name</label>
        <input type="text" title="name" id="form-input-name" />
        <label htmlFor="FullName">Email</label>
        <input type="email" title="email" id="form-input-email" />
        <label htmlFor="FullName">Phone</label>
        <input type="phone" title="phone-number" id="form-input-phone-number" />
        <label htmlFor="FullName">Adress</label>
        <input type="text" title="adress" id="form-input-adress" placeholder='(Street Adress)' />
        <input type="text" title="city" id="form-input-adress" placeholder='(City)'/>
        <input type="text" title="state/province" id="form-input-adress" placeholder='(State/Province)' />
    </form>
    <div className='payment-options' id='payment-options'>
    <h3>Payment Options</h3>
    <div className='mastercard' id='mastercard'>
        <input type="radio" name="radio-btn" id="radio-btn" />
        <img src={Mastercard} alt="Mastercard-logo" />
    </div>
    <div className='klarna' id='klarna'>
        <input type="radio" name="radio-btn" id="radio-btn" />
        <img src={Klarna} alt="Klarna-logo" />
    </div>
    <div className='paypal' id='paypal'>
        <input type="radio" name="radio-btn" id="radio-btn" />
        <img src={Paypal} alt="Paypal-logo" />
    </div>
    <div className='americanExpress' id='americanExpress'>
        <input type="radio" name="radio-btn" id="radio-btn" />
        <img src={AmericanExpress} alt="AmericanExpress-logo" />
    </div>
    </div>
    </div>
    <button className='confirm-btn' id='confirm-btn'>Confirm Booking</button>
    </div>
  )
}

export default BookingConfirm