import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import './DetailCard.scss'
import Review from '../Review/Review';
import { useQuery } from '../../utils/types/hooks';
import { useOrderContext } from '../../Context/OrderContext';

const DetailCard = () => {

    const { id } = useParams()
    const  [search, queryData] = useQuery()
    const orderContext = useOrderContext()
    
    const [product, setProduct] = useState<Product | null>(null);
    // const [products, setProducts] = useState<Product[]>([]);
    // const navigate = useNavigate()
  
    // const {user} = useSelector(state => state.auth)
    // if(!user) return <Navigate to='/login'/>
  
    useEffect(() => {
      // Fetch individual product details
      fetch(`http://localhost:9999/api/products/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch product details: ${response.status}`);
          }
          return response.json();
        })
        .then((data: Product) => {
          setProduct(data);
        })
        .catch((error) => {
          console.error(error);
          // Handle errors, e.g., redirect to an error page or show a message
        });
    })

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
             <li>{product.facilities[0]}</li>
            <li>{product.facilities[1]}</li>
            <li>{product.facilities[2]}</li>
            <li>{product.facilities[3]}</li>
            <li>{product.facilities[4]}</li>
            <li>{product.facilities[5]}</li>   
            </ul>
            </div>
            <div className='container-2' id='container-2'>
             <ul>
            <li>{product.facilities[6]}</li>
            <li>{product.facilities[7]}</li>
            <li>{product.facilities[8]}</li>
            <li>{product.facilities[9]}</li>
            <li>{product.facilities[10]}</li>
            <li>{product.facilities[11]}</li>
            </ul>            
            </div>
               
        </div>

        <div className='reservetion-card' id='reservetion-card'>
            <div className='container-1' id='container-2'>
           <p>{product.bedrooms}</p>
           <p>{product.guests}</p>
            </div>
            <div className='container-2' id='container-2'>
           <p>Check-in Date: {queryData?.startDate}</p>
           <p>Check-out Date {queryData?.endDate}</p>
            </div>
           <h3>Total: Price  10.000 SEK</h3>
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
            <li>{product.amenities[0]}</li>
            <li>{product.amenities[1]}</li>
            <li>{product.amenities[2]}</li>
            <li>{product.amenities[3]}</li>
            </ul>
            </div>
            <div className='container-2'>
            <ul>
            <li>{product.amenities[4]}</li>
            <li>{product.amenities[5]}</li>
            <li>{product.amenities[6]}</li>
            </ul>            

            </div>
        </div>
        {/* Display other product details */}
        <div className='product-reviews' id='product-reviews'>
        <Review/>
        <Review/>
        </div>
        <div className='product-reviews' id='product-reviews'>
        <Review/>
        <Review/>
        </div>
      </div>

    )}
  </div>
  )
}

export default DetailCard