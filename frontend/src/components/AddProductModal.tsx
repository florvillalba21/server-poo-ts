import React, { useState } from "react";
import { Product } from "../utils/products/interface";
import { createProduct } from "../utils/products/products";

const AddProductModal: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    nameProduct: "",
    unitPrice: 0,
    bagPrice: 0,
    quantityPrice: 0,
    stock: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const isProductValid = (product: Product) => {
    return (
      product.nameProduct !== "" &&
      product.unitPrice !== 0 &&
      product.bagPrice !== 0 &&
      product.quantityPrice !== 0 &&
      product.stock !== 0
    );
  };
  

  const handleSubmit = () => {
    if (isProductValid(product)) {
        createProduct(product)
        setProduct({
          nameProduct: "",
          unitPrice: 0,
          bagPrice: 0,
          quantityPrice: 0,
          stock: 0,
        })
      } else {
        alert("Por favor, completa todos los campos correctamente.");
      }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Agregar Producto
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Agregar un producto
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="nameProduct">Nombre del Producto:</label>
                <input
                  type="text"
                  className="form-control"
                  id="nameProduct"
                  name="nameProduct"
                  value={product.nameProduct}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="unitPrice">Precio Unitario:</label>
                <input
                  type="number"
                  className="form-control"
                  id="unitPrice"
                  name="unitPrice"
                  value={product.unitPrice}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bagPrice">Precio por Bolsa:</label>
                <input
                  type="number"
                  className="form-control"
                  id="bagPrice"
                  name="bagPrice"
                  value={product.bagPrice}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="quantityPrice">Precio por Cantidad:</label>
                <input
                  type="number"
                  className="form-control"
                  id="quantityPrice"
                  name="quantityPrice"
                  value={product.quantityPrice}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="stock">Stock:</label>
                <input
                  type="number"
                  className="form-control"
                  id="stock"
                  name="stock"
                  value={product.stock}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
