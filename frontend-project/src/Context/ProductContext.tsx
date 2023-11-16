// // ProductContext.tsx
// import React, { createContext, useContext, useEffect, useState, PropsWithChildren } from 'react';

// interface ProductContextType {
//   products: Product[];
//   Product: Product | null
//   setProduct: React.Dispatch<React.SetStateAction<Product | null>>
// }

// const defaultState: ProductContextType = {
//   products: [],
//   Product: null,
//   setProduct: () => {},
// }

// const ProductContext = createContext<ProductContextType>(defaultState);

// export const ProductProvider = ({ children }: PropsWithChildren) => {
//   const [products, setProducts] = useState<Order[]>([]);
//   const [product, setProduct ] = useState<Product | null>(null)

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('http://localhost:9999/api/products');
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <ProductContext.Provider value={{ product, products, setProduct }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export const useProductContext = () => {
//   const context = useContext(ProductContext);
//   if (!context) {
//     throw new Error('useProductContext must be used within an ProductProvider');
//   }
//   return context;
// };
