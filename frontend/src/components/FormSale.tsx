import React, { useContext, useState } from "react";
import { Product as OriginalProduct } from "../utils/products/interface";
import { ProductContext } from "../context/products/productsContext";

interface Product extends OriginalProduct {
  quantity: number;
}

export const SaleForm = () => {
  const products  = useContext(ProductContext);
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string>(""); // Para almacenar el producto seleccionado
  const [quantity, setQuantity] = useState<number>(1); // Cantidad predeterminada: 1

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const addToCart = () => {
    if (selectedProduct && quantity > 0) {
      const existingProduct = cart.find((item) => item.nameProduct === selectedProduct);

      if (existingProduct) {
        const updatedCart = cart.map((item) => {
          if (item.nameProduct === selectedProduct) {
            return {
              ...item,
              quantity: item.quantity + quantity,
            };
          }
          return item;
        });
        setCart(updatedCart);
      } else {
        const selectedProductInfo = products?.find((product) => product.nameProduct === selectedProduct);
        if (selectedProductInfo) {
          const newCartItem: Product = {
            ...selectedProductInfo,
            quantity: quantity,
          };
          setCart([...cart, newCartItem]);
        }
      }

      // Restablecer la cantidad a 1 después de agregar al carrito
      setQuantity(1);
    }
  };

  return (
    <div>
      <h1>Vender Productos</h1>
      <div>
        <label htmlFor="productSelect">Seleccione un producto:</label>
        <select id="productSelect" onChange={handleProductChange} value={selectedProduct}>
          <option value="">Seleccionar producto</option>
          {products &&
            products.map((product) => (
              <option key={product.id} value={product.nameProduct}>
                {product.nameProduct}
              </option>
            ))}
        </select>
        <label htmlFor="quantityInput">Cantidad:</label>
        <input
          type="number"
          id="quantityInput"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
        />
        <button onClick={addToCart} disabled={!selectedProduct || quantity <= 0}>
          Agregar al Carrito
        </button>
      </div>
      <div>
        <h2>Carrito de Compras</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.nameProduct} - Cantidad: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
