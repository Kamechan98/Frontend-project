import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { OrderProvider } from './Context/OrderContext'
import { ProductProvider } from './Context/ProductContext'
import { UserProvider } from './Context/UserContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <OrderProvider>
      <ProductProvider>
        <UserProvider>
        <App />  
        </UserProvider>
        
      </ProductProvider>
    </OrderProvider>
  </React.StrictMode>,
)
