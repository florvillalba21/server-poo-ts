import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getProducts } from "../../utils/products/products";
import { Product } from "../../utils/products/typeProduct";

interface ProductContextType {
  products: Product[] | null;
  loading: boolean;
  getProducts: () => void;
}

interface ProductProviderProps {
    children: ReactNode
  }

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    } catch (Error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, getProducts: fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
