import React from 'react'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Nav/>
      <div className='div'>
        <h1>NorthernNest Retreat</h1>
        <h2>Explore our luxury & romantic cabins for couples</h2>
        <p>Select one of our generous packages, along with a modern, comfy and luxurious decor 
        where you and your partner can spend some romatic time with each other, whether it be by
        skiing, hiking, or by taking a warm bath or spend an hour in the sauna.
        </p>
      </div>
      <Footer/>
    </div>
  )
}

export default App