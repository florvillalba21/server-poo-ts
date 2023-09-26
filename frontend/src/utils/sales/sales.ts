import axios from "axios";
import { Sale } from "./typeSale";

const urlBase = "http://localhost:3000/api";

export const getSales = async () => {
  try {
    const listSales = await axios.get(urlBase + "/sales");
    return listSales.data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export const createSale = async (data: Sale) => {
  try {
    const newSale = await axios.post(urlBase + "/sales", data);
    return newSale.data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export const deleteSale = async () => {
  try {
    const deletedSale = await axios.delete(urlBase + "/sales");
    return deletedSale;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
