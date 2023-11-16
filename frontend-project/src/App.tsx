import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import BookingConfirmation from './pages/BookingConfirmation/BookingConfirmation'
import PaymentConfirmation from './pages/PaymentConfirmation/PaymentConfirmation'

const App = () => {
  React.useEffect(() => {
    console.log("HELLO APP")
    return () => {
        console.log("GOOD BYE APP")
        // orderContext.setOrderProduct(null)
    }
},[])
  return (
      <Router>
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<ProductDetails/>}/>
      <Route path='/booking-confirmation' element={<BookingConfirmation/>}/>
     <Route path='/payment-confirmation' element={<PaymentConfirmation/>}/>
      </Routes>
      <Footer/>
      </Router>
  )
}

export default App