import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import heart from '../../assets/Heart.svg';
import './ProductCard.scss'


const URL = 'http://localhost:9999/api/products'


const ProductCard: React.FC = () => {

    const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // const requestBody = Object.fromEntries(queryParams.entries());
          const endpoint = `${URL}${location.search}`;
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
      {products.map((product) => (
        <div className='card' id='card'
        >
        <Link to={`/products/${product._id}`}></Link>
          <React.Fragment key={product?._id || ''}>
            <div className='product-image' id='product-image'>
            <h2>{product.name ? product.name : 'Unavailable'}</h2>
            <img className='p-image' id='p-image' src={product.imgURLs[0]} alt="Image of house" />
          </div>
          <div className='card-content' id='card-content'>
            <h3>
            {product.description ? product.description : 'Unavailable'}
          </h3>
          <div className='like-heart' id='like-heart'>
            <img src={heart} className='heart' id='heart' alt="like-symbol"/>
            </div>
          <ul>
          <li>
            {product.price ? product.price : 'Unavailable'}
            SEK per night</li>
            <li>
            {product.package ? product.package : 'Unavailable'}
          </li>
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
            <li>
            {product.rating ? product.rating : 'Unavailable'}
          </li>
          </ul>
          <div className='view-deal'>
            <Link className='view-product-btn' id='view-product-btn' to={`/products/${product._id}`}> View Deal</Link>
            {/* <button className='view-product-btn' id='view-product-btn'>View Deal</button> */}
          </div>
          </div>
        </React.Fragment>
        </div>
      ))}
    </div>
    </div>
  )
}

export default ProductCard