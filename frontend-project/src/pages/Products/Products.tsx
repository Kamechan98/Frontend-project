import React, {useEffect} from 'react'
import { useLocation } from "react-router-dom"

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    const requestBody = Object.fromEntries(queryParams.entries())
    console.log("query", requestBody)
    //TODO GET data from backend
    //Send query params in get request to filter data
  },[queryParams])
  
   
  return (
    <div>Products</div>
  )
}

export default Products