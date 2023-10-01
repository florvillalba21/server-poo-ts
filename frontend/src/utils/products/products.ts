import axios from "axios";
import { Product } from "./interface";

const urlBase = "http://localhost:3000/api";

export const getProducts = async () => {
  try {
    const listProducts = await axios.get<Product[]>(urlBase + "/products");

    const products = listProducts.data
    return  products
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export const createProduct = async (newProduct : Product) => {
  try {
    const savedProduct = await axios.post(urlBase + "/products", newProduct);

    const product : Product = await savedProduct.data

    return product;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export const deleteProduct = async () => {
  try {
    const deletedProduct = await axios.delete(urlBase + "/products");
    return deletedProduct;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
