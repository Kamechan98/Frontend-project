import React, { useEffect } from 'react'
import Checkmark from '../../assets/Checkmark.svg';
import './PaymentConfirm.scss'
import { useUserContext } from '../../Context/UserContext';
// import { useQuery } from '../../utils/types/hooks';
import { OrderProvider, useOrderContext } from '../../Context/OrderContext';

const PaymentConfirm = () => {

  const orderContext = useOrderContext();
  const userContext = useUserContext();

  const order = orderContext.submittedOrder

  const userEmail = userContext.user?.email


  console.log("PROD ",order)

  return (
    <div className='container'>
    <div className='headline' id='headline'>
        <img src={Checkmark} alt="checkmark" />
    </div>
    <div className='payment' id='payment'>
      {!order &&( <div>
        <p>...Loading order</p>
        </div>
      )}
      
      {order && (
      <div>
        <h2>Thank you for your payment!</h2>
        <h3 className='text'>Total payment amount</h3>
        <p className='payment-headline'> {order.totalCost || 'N/A'} SEK </p>
        <br/>
        <h3 className='payment-headline'> {order.product.name} </h3>
        <br/>
        <h3 className='payment-headline' >Booking Reference</h3>
        <p className='text'>{order.bookingReference || 'N/A'}</p>
        <h3 className='text' >A Receipt for this transaction has been sent to this email:</h3>
        <p className='text'>{userEmail}</p>
        <br/>
      <div className='order-img' id='order-img'>
        <img src={order.product.imgURLs[0]} alt="img" />
        <img src={order.product.imgURLs[3]} alt="img" />
      </div>
      </div>
      )}
    </div>
    </div>)
}

export default PaymentConfirm