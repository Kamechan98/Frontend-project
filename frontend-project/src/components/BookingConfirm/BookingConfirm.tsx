import React, { useEffect, useState, ChangeEvent } from 'react'
import Mastercard from '../../assets/mastercard.jpg';
import Klarna from '../../assets/Klarna.jpg';
import Paypal from '../../assets/Paypal.jpg';
import AmericanExpress from '../../assets/AmericanExpress.jpg';
import './BookingConfirm.scss'
import { useOrderContext } from '../../Context/OrderContext';
import { useQuery } from '../../utils/types/hooks';
import { useNavigate } from 'react-router-dom';


interface BookingConfirmProps {}

interface NewOrder {
  userId: string;
  product: string;
  guests: number;
  status: string;
  cancellationProtectionFee: boolean;
  totalCost: number;
  paymentMethod: string;
}



const paymentMethods = [
  {name: "Mastercard", image: Mastercard},
  {name: "Klarna", image: Klarna},
  {name: "Paypal", image: Paypal},
  {name: "Amex", image: AmericanExpress},
  
]


const BookingConfirm: React.FC<BookingConfirmProps> = () => {

    const navigate = useNavigate()

    const  [search, queryData] = useQuery()
    const orderContext = useOrderContext()

    const [newOrder, setNewOrder] = useState({
        product: '', 
        guests: 2,
        status: 'Pending',
        cancellationProtectionFee: true,
        totalCost: 0, 
        paymentMethod: '', 
      });

      useEffect(() => {
        if(orderContext.orderProduct ){
          const _product = orderContext.orderProduct as Product
          setNewOrder((prevState) => ({
            ...prevState,
            product: _product._id,
            totalCost: _product.price
          }))
        }
      },[orderContext.orderProduct])

    

    console.log("QUERY", queryData)
    console.log("ORDER PRODUCT", orderContext.orderProduct)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
        const { name } = e.target;
        console.log(name, value)
        // if(name === "cancellationProtectionFee"){
        //   return setNewOrder((prevOrder) => ({
        //     ...prevOrder,
        //     [name]: value as any,
        //     totalCost: prevOrder.totalCost + (value as boolean ? 400 : -400)
        //   }))
        // }
        setNewOrder((prevOrder) => ({
          ...prevOrder,
          [name]: value as any,
        }));
      };

      const handleConfirmBooking = async () => {
        // return console.log("newOrder", newOrder)
        try {
          const token = localStorage.getItem("TOKEN")
         if(!token){
            navigate("/login")
          } 
          const response = await fetch('http://localhost:9999/api/orders/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(newOrder),
          });
    
          if (!response.ok) {
            throw new Error(`Failed to confirm booking: ${response.status}`);
          }
          const data = await response.json()
          // Handle successful booking confirmation, e.g., redirect to a confirmation page
          console.log('Booking confirmed successfully', data);
          navigate("/payment-confirmation")
        } catch (error) {
          console.error('Error confirming booking:', error);
          // Handle error, e.g., display an error message to the user
        }
      };


  return (
    <div className='container' id='container'>
    <h2 className='Booking-info-headline' id='Booking-info-headline'>Booking Information</h2>
    <div className='booking-dates'>
    <div className='check-in-dates' id='check-in-dates'>
    <h3>Check-in Date</h3>
    <p>{queryData.startDate}</p>
    </div>
    <div className='check-out-dates' id='check-out-dates'>
    <h3>Check-out Date</h3>
    <p>{queryData.endDate}</p>
    </div>
    </div>
    <div className='booking-info' id='booking-info'> 
    <h3>Chosen Cabin</h3>
    <p>{orderContext.orderProduct?.name}</p>
    <p>{orderContext.orderProduct?.location}</p>
    <h3>Cabin Package</h3>
    <p>{orderContext.orderProduct?.package}</p>
    <p>{orderContext.orderProduct?.price}</p>
    <h3>Guests</h3>
    <p>{orderContext.orderProduct?.guests}</p>
    <h3>Cancellation Protection Fee</h3>
    <p>500kr</p>
    <input type="checkbox" checked={newOrder.cancellationProtectionFee} name="cancellationProtectionFee" id="check-box" onChange={handleInputChange} />
    <h3>Total Cost</h3>
    <p>{newOrder.totalCost}{newOrder.cancellationProtectionFee ? ` + (${500}) ` : ''}SEK</p>
    </div>
    <div className='booking-form' id='booking-form'>
    <form className='form' id='form'>
        <label htmlFor="FullName">Full Name</label>
        <input type="text" title="name" id="form-input-name" onChange={handleInputChange}/>
        <label htmlFor="FullName">Email</label>
        <input type="email" title="email" id="form-input-email" onChange={handleInputChange}/>
        <label htmlFor="FullName">Phone</label>
        <input type="phone" title="phone-number" id="form-input-phone-number" onChange={handleInputChange}/>
        <label htmlFor="FullName">Adress</label>
        <input type="text" title="adress" id="form-input-adress" placeholder='(Street Adress)' onChange={handleInputChange}/>
        <input type="text" title="city" id="form-input-adress" placeholder='(City)' onChange={handleInputChange}/>
        <input type="text" title="state/province" id="form-input-adress" placeholder='(State/Province)' onChange={handleInputChange}/>
    </form>
    <div className='payment-options' id='payment-options'>
    <h3>Payment Options</h3>
    {paymentMethods.map((option) => {
      return (
        <div className={option.name} id={option.name} key={option.name}>
          <input 
            type="radio" 
            name="paymentMethod" 
            value={option.name} 
            checked={newOrder.paymentMethod === option.name} 
            onChange={handleInputChange}/>
          <img src={option.image} alt="Logo" />
        </div>

      )
    })}
    </div>
    </div>
    <button className='confirm-btn' id='confirm-btn' onClick={handleConfirmBooking}>Confirm Booking</button>
    </div>
  )
}

export default BookingConfirm