import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from './modules/products/productSlice'

export const store = configureStore({
  reducer: {
    products : ProductReducer
  },
});

