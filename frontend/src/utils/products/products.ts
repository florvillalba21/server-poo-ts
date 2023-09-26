import axios from "axios";
import { Product } from "./typeProduct";

const urlBase = "http://localhost:3000/api";

export const getProducts = async () => {
  try {
    const listProducts = await axios.get(urlBase + "/products");

    const products : Product[] = listProducts.data
    return products
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export const createProduct = async (data: Product) => {
  try {
    const newProduct = await axios.post(urlBase + "/products", data);

    return newProduct;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export const updateProduct = async () => {
  try {
    const updatedProduct = await axios.put(urlBase + "/products");
    return updatedProduct;
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
