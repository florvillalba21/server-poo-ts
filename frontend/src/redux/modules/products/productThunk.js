import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async () => {
    const urlBase = "http://lcalhost:3000/api";
    const config = {
      METHOD: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    fetch(urlBase + "/products", config)
      .then((result) => {
        console.log(result)
        return result.json();
      })
      .catch((err) => {
        console.log(err);
        throw new Error();
      });
  }
);
