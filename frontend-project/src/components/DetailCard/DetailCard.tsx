import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import './DetailCard.scss'
import { useQuery } from '../../utils/types/hooks';
import { useOrderContext } from '../../Context/OrderContext';
import { useProductContext } from '../../Context/ProductContext';
import bedding from '../../assets/Bedding.svg';
import chargingStation from '../../assets/ChargingStation.svg';
import kingsizedBed from '../../assets/Kingsized Be.svg'
import kitchen from '../../assets/Kitchen.svg'
import outdoorDeck from '../../assets/Outdoor deck.svg'
import parking from '../../assets/Parking.svg'
import petsAllowed from '../../assets/Pets Allowed.svg'
import tv from '../../assets/TV.svg'
import towels from '../../assets/Towels.svg'
import lounge from '../../assets/grommet-icons_lounge.svg'
import wifi from '../../assets/Wifi.svg'
import washingMachine from '../../assets/Washing Machine.svg'
import guests from '../../assets/guests.svg'
import reviews from '../../assets/user-review.png'


const DetailCard = () => {

    const { id } = useParams()
    const  [search, queryData] = useQuery()
    const {
      product,
      fetchProduct
    } = useProductContext()
    const orderContext = useOrderContext()
    
  useEffect(() => {
    if(id) {
      fetchProduct(id)
    }
  },[id])
    

  return (
    <div>
    {product && (
      <div className='detail-card' id='detail-card'>
       
        <h2 className='product-name' id='product-name'>{product.name}</h2>
        <ImageCarousel images={product.imgURLs}/>
        <h2 className='product-desc'>{product.description}</h2>
        <h3>Facilities</h3>
        <div className='facilities-card' id='facilities-card'>
            
            <div className='container-1' id='container-1'>
            <ul>
             <li>
            <img src={petsAllowed} alt="" />
            {product.facilities[0]  || 'X'} </li>
            <li>
            <img src={kitchen} alt="" />
            {product.facilities[1]  || 'X'}</li>
            <li>
            <img src={kingsizedBed} alt="" />
            {product.facilities[2]  || 'X'}</li>
            <li>
            <img src={outdoorDeck} alt="" />
            {product.facilities[3]  || 'X'}</li>
            <li>
            <img src={tv} alt="" />  
            {product.facilities[4]  || 'X'}</li>
            <li>
            <img src={washingMachine} alt="" />
            {product.facilities[5] || 'X'}</li>   
            </ul>
            </div>
            <div className='container-2' id='container-2'>
             <ul>
            <li>
            <img src={chargingStation} alt="" />  
            {product.facilities[6]  || 'X'}</li>
            <li>
            <img src={wifi} alt="" />
            {product.facilities[7]  || 'X'}</li>
            <li>
            <img src={parking} alt="" />  
            {product.facilities[8]  || 'X'}</li>
            <li>
            <img src={lounge} alt="" />  
            {product.facilities[9]  || 'X'}</li>
            <li>
            <img src={towels} alt="" />
            {product.facilities[10]  || 'X'}</li>
            <li>
            <img src={bedding} alt="" />
            {product.facilities[11]  || 'X'}</li>
            </ul>            
            </div>
               
        </div>

        <div className='reservetion-card' id='reservetion-card'>
            <div className='container-1' id='container-2'>
           <p>2 bedrooms</p>
           <p>2 <img src={guests} alt="" /></p>
            </div>
            <div className='container-2' id='container-2'>
           <p>Check-in Date: {queryData?.startDate}</p>
           <p>Check-out Date {queryData?.endDate}</p>
            </div>
            
           <h3>Total: {orderContext.orderProduct?.price}</h3>
           <Link to={`/booking-confirmation?${search}`} className='reserve-btn' id='reserve-btn' onClick={() => {
            orderContext.setOrderProduct(product)
           }}>
            Reserve
           </Link>
        </div>

        <div className='amenities-card' id='amenities-card'>
            <h3>Included in the package</h3>
            <div className='container-1'>
            <ul>
            <li>{product.amenities[0]  || 'X'}</li>
            <li>{product.amenities[1]  || 'X'}</li>
            <li>{product.amenities[2]  || 'X'}</li>
            <li>{product.amenities[3]  || 'X'}</li>
            </ul>
            </div>
            <div className='container-2'>
            <ul>
            <li>{product.amenities[4]  || 'X'}</li>
            <li>{product.amenities[5]  || 'X'}</li>
            <li>{product.amenities[6]  || 'X'}</li>
            </ul>            

            </div>
        </div>
        <div className='user-reviews' id='user-reviews'>
          <div className='user-review' id='user-review'>
            <img src={reviews} alt="reviews" />
          </div>
          <div className='user-review' id='user-review'>
            <img src={reviews} alt="reviews" />
          </div>
          <div className='user-review' id='user-review'>
            <img src={reviews} alt="reviews" />
          </div>
        </div >
        <div className='user-reviews' id='user-reviews'>
          <div className='user-review' id='user-review'>
            <img src={reviews} alt="reviews" />
          </div>
          <div className='user-review' id='user-review'>
            <img src={reviews} alt="reviews" />
          </div>
          <div className='user-review' id='user-review'>
            <img src={reviews} alt="reviews" />
          </div>
        </div>
        </div>

    )}
  </div>
  )
}

export default DetailCard