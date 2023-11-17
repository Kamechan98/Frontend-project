// OrderContext.tsx
import React, { createContext, useContext, useEffect, useState, PropsWithChildren } from 'react';

interface ProductContextType {
  products: Product[];
  product: Product | null
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>
}

const defaultState: ProductContextType = {
  products: [],
  product: null,
  setProduct: () => {},
}

const ProductContext = createContext<ProductContextType>(defaultState);

export const ProductProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct ] = useState<Product | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:9999/api/products/');
        const data = await response.json();

        // Assuming data is an array of products, adjust this part based on your API response
        if (data.length > 0) {
        // Set the first product in the array, adjust as needed
        setProduct(data[0]);
      }

        setProducts(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within an ProductProvider');
  }
  return context;
};