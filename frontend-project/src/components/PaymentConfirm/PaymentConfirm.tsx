import React from 'react'
import Checkmark from '../../assets/Checkmark.svg';
import './PaymentConfirm.scss'

const PaymentConfirm = () => {
  return (
    <div className='container'>
    <div className='headline' id='headline'>
        <img src={Checkmark} alt="checkmark" />
    </div>
    <div className='payment' id='payment'>
        <h3>Thank you for your payment!</h3>
        <p>Total payment amount</p>
        <h4>TOTAL PRICE HERE</h4>
        <p>Booking Reference</p>
        <h4>XXXXXXXXXXXX</h4>
        <p>A Receipt for this transaction has been sent to this email:</p>
        <p>user@mail.com</p>
    </div>
    </div>
  )
}

export default PaymentConfirm