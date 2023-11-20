import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import heart from '../../assets/Heart.svg';
import stars from '../../assets/five-star.svg';
import './ProductCard.scss'


const URL = 'http://localhost:9999/api/products'


const ProductCard: React.FC = () => {

    const location = useLocation();
    const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const endpoint = `${URL}${location.search}`;
          console.log("Location", location, location.search)
          const response = await fetch(endpoint);
    
          if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
          }
    
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching data:', error);
          // Additional handling if needed
        }
      };
    
      fetchData();
    }, [location.search]);  


  return (
    <div>
      <h1>Products</h1>
    <div className='product-page' id='product-page'>
      {products.map((product) => {
        const productUrl = `/products/${product._id}${location.search}`
        return (
          <div className='card' id='card'>
          <Link to={productUrl}></Link>
            <React.Fragment key={product?._id || ''}>
              <div className='product-image' id='product-image'>
              <img className='p-image' id='p-image' src={product.imgURLs[0]} alt="Image of house" />
            </div>
            <div className='card-content' id='card-content'>
            <div className='card-price' id='card-price'> 
            <p>{product.price ? product.price : 'Unavailable'}
              SEK per night</p>
            </div>
            <h2>{product.name ? product.name : 'Unavailable'}</h2>
            <div className='card-package' id='card-package'>
            <p>{product.package ? product.package : 'Unavailable'}</p>
            </div>
              <h3>
              {product.description ? product.description : 'Unavailable'}
            </h3>
              <img src={heart} className='heart' id='heart' alt="like-symbol"/>            
            <ul>
            <li>
              {product.price ? product.price : 'Unavailable'}
              SEK per night</li>
              <li>
              {product.location ? product.location : 'Unavailable'}
            </li>
              <li>
              {product.size ? product.size : 'Unavailable'}
            </li>
              <li>
              {product.guests ? product.guests : 'Unavailable'}
            </li>
              <li>
              {product.bedrooms ? product.bedrooms : 'Unavailable'}
            </li>
            </ul>
            <div className='reviews-stars' id='reviews-stars'>
            <img src={stars} alt="stars" />
            <p className='rating' id='rating'>
            {product.rating ? product.rating : 'Unavailable'}
            </p>
            </div>
            <div className='view-deal'>
              <Link className='view-product-btn' id='view-product-btn' to={productUrl}> View Deal</Link>
            </div>
            </div>
          </React.Fragment>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default ProductCard