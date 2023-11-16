// OrderContext.tsx
import React, { createContext, useContext, useEffect, useState, PropsWithChildren } from 'react';

interface OrderContextType {
  orders: Order[];
  orderProduct: Product | null
  setOrderProduct: React.Dispatch<React.SetStateAction<Product | null>>
}

const defaultState: OrderContextType = {
  orders: [],
  orderProduct: null,
  setOrderProduct: () => {},
}

const OrderContext = createContext<OrderContextType>(defaultState);

export const OrderProvider = ({ children }: PropsWithChildren) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderProduct, setOrderProduct ] = useState<Product | null>(null)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:9999/api/orders/getOrders');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <OrderContext.Provider value={{ orders, orderProduct, setOrderProduct }}>
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

