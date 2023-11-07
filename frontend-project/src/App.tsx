import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ProductDetails from './pages/ProductDetails/ProductDetails'

const App = () => {
  return (
      <Router>
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
      </Router>
  )
}

export default App