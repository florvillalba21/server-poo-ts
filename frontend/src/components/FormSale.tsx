import React, { useContext, useState } from "react";
import { Product as OriginalProduct } from "../utils/products/interface";
import { ProductContext } from "../context/products/productsContext";
import { Sale } from "../utils/sales/interface";
import { createSale } from "../utils/sales/sales";

interface Product extends OriginalProduct {
  quantity: number;
}

export const SaleForm = () => {
  const { products } = useContext(ProductContext);
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

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
        const selectedProductInfo = products?.find((product: Product) => product.nameProduct === selectedProduct);
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

  const sell = async () => {
    try {
      const saleData: Sale = {
        products: cart,
        date: new Date().toString(),
      };


      const newSale = await createSale(saleData);
      if (newSale) {
        alert("Venta realizada")

      }

      setCart([]);
    } catch (error) {
      console.error("Error al realizar la venta:", error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="container">
        <h1>Vender Productos</h1>
        <label htmlFor="productSelect">Seleccione un producto:</label>
        <select id="productSelect" onChange={handleProductChange} value={selectedProduct} className="form-control">
          <option value="">Seleccionar producto</option>
          {products &&
            products.map((product: Product) => (
              <option key={product.id} value={product.nameProduct}>
                {product.nameProduct}
              </option>
            ))}
        </select>
        <label htmlFor="quantityInput">Cantidad:</label>
        <input
          className="form-control"
          type="number"
          id="quantityInput"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
        />
        <button className="btn btn-primary" onClick={addToCart} disabled={!selectedProduct || quantity <= 0}>
          Agregar al Carrito
        </button>
      </div>
      <div className="container">
        <h2>Carrito de Compras</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.nameProduct} - Cantidad: {item.quantity}
            </li>
          ))}
        </ul>
        <div>
          <button onClick={sell} className="btn btn-primary"> Vender </button>
        </div>
      </div>

    </div>
  );
};
