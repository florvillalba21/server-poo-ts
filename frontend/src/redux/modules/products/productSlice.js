import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productThunk";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        productList: [],
        loading: 'idle'
    },
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(getProducts.pending), (state) =>{
            state.loading = 'Pending'
        }
        builder.addCase(getProducts.rejected), (state) =>{
            state.loading = 'Reject'
        }
        builder.addCase(getProducts.fulfilled), (state, action) =>{
            state.loading = 'Success',
            state.productList = action.payload 
        }
    }
})

export default productSlice.reducer