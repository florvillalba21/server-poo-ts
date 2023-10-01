import React, { createContext, useEffect, useState, ReactNode } from "react";
import { getProducts } from "../../utils/products/products";
import { Product } from "../../utils/products/interface";

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductContext = createContext<Product[] | null>(null);


export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[] | null>(null);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (Error) {
      alert("ha ocurrido un error")
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
