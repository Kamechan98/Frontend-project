import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ProductCard.scss'
import ImageCarousel from '../ImageCarousel/ImageCarousel';


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
        <div className='card' id='card'>
          <React.Fragment key={product?._id || ''}>
            <h2>{product.name ? product.name : 'Unavailable'}</h2>
            <div className='product-image' id='product-image'>
            <img className='p-image' id='p-image' src={product.imgURLs} alt="" />
          </div>
            <h3>
            {product.description ? product.description : 'Unavailable'}
          </h3>
          <ul>
            <li>
            {product.package ? product.package : 'Unavailable'}
          </li>
            <li>
            {product.price ? product.guests : 'Unavailable'}
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

          <ul>
            <li>
            {product.amenities ? product.amenities : 'Unavailable'}
          </li>
          </ul>
          <ul>
            <li>
            {product.facilities ? product.facilities : 'Unavailable'}
          </li>
          </ul>
        </React.Fragment>
        </div>
          
      ))}
    </div>
    </div>
  )
}

export default ProductCard