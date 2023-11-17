// OrderContext.tsx
import React, { createContext, useContext, useEffect, useState, PropsWithChildren } from 'react';
import { NavigateFunction } from 'react-router-dom';


interface OrderContextType {
  orders: Order[];
  submittedOrder: Order | null;
  orderProduct: Product | null;
  setOrderProduct: React.Dispatch<React.SetStateAction<Product | null>>;
  createOrder: (newOrder: Order, navigate: NavigateFunction) => Promise<void>

}

const defaultState: OrderContextType = {
  orders: [],
  submittedOrder: null,
  orderProduct: null,
  setOrderProduct: () => {},
  createOrder: (() => {}) as any
};

const OrderContext = createContext<OrderContextType>(defaultState);

export const OrderProvider = ({ children }: PropsWithChildren) => {

  const [orders, setOrders] = useState<Order[]>([]);
  const [orderProduct, setOrderProduct] = useState<Product | null>(null);
  const [submittedOrder, setSubmittedOrder] = useState<Order | null>(null)

  useEffect(()=> {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:9999/api/orders/getOrders');
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
 };
 

 const createOrder = async (newOrder: Order, navigate: NavigateFunction) => {
  try {
    const token = localStorage.getItem("TOKEN")
   if(!token){
      navigate("/login")
    } 
    const response = await fetch('http://localhost:9999/api/orders/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(newOrder),
    });

    if (!response.ok) {
      throw new Error(`Failed to confirm booking: ${response.status}`);
    }
    const data = await response.json()
    setSubmittedOrder(data as Order)
    console.log('Booking confirmed successfully', data);
    navigate("/payment-confirmation")
  } catch (error) {
    console.error('Error confirming booking:', error);
    // Handle error, e.g., display an error message to the user
  }
}




  return (
    <OrderContext.Provider value={{ orders, orderProduct, submittedOrder, setOrderProduct, createOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrderContext must be used within an OrderProvider');
  }
  return context;
};
