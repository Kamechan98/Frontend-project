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
        <h3>Thank you for your payment!</h3>
        <p>Total payment amount</p>
        <h4> {order.totalCost || 'N/A'} </h4>
        <h4> {order.product.name} </h4>
        <p>Booking Reference</p>
        <h4>{order.bookingReference || 'N/A'}</h4>
        <p>A Receipt for this transaction has been sent to this email:</p>
        <p>{userEmail}</p>
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