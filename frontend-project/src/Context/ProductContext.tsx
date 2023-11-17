// OrderContext.tsx
import React, { createContext, useContext, useEffect, useState, PropsWithChildren } from 'react';

interface ProductContextType {
  products: Product[];
  product: Product | null
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>
  fetchProduct: (id: string) => void
}

const defaultState: ProductContextType = {
  products: [],
  product: null,
  setProduct: () => {},
  fetchProduct: () => {}
}

const ProductContext = createContext<ProductContextType>(defaultState);

export const ProductProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct ] = useState<Product | null>(null)

  useEffect(() => {


    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:9999/api/products');
      const data = await response.json();

      // console.log('Fetched products:', data);

      setProducts(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const fetchProduct = (id: string) => {
    fetch(`http://localhost:9999/api/products/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch product details: ${response.status}`);
          }
          return response.json();
        })
        .then((data: Product) => {
          setProduct(data);
        })
        .catch((error) => {
          console.error(error);
          // Handle errors, e.g., redirect to an error page or show a message
        });
  }
  

  return (
    <ProductContext.Provider value={{ products, product, setProduct, fetchProduct }}>
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