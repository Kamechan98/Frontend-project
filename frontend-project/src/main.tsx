import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { OrderProvider } from './Context/OrderContext'
import { ProductProvider } from './Context/ProductContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <OrderProvider>
      <ProductProvider>
      <App />
      </ProductProvider>
    </OrderProvider>
  </React.StrictMode>,
)
