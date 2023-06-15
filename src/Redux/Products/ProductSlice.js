import { createSlice } from "@reduxjs/toolkit";


//import the fetch function
import fetchProducts from "./ProductAsync";

const initialState = {
    product_isLoading : false,
    product_data : [],
    product_error : ""
}

const ProductSlice = createSlice({
    name : "Product",
    initialState : initialState,
    reducer : {

    },
    extraReducers : builder => {
        builder.addCase(fetchProducts.pending, state => {
            state.product_isLoading = true
            state.product_data = []
            state.product_error = ""
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.product_isLoading = false
            // Add only new data to the state
            state.product_data = [...state.product_data, ...action.payload]
            state.product_error = ""
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.product_isLoading = false
            state.product_data = []
            state.product_error = action.error.message
        })
    }

})


export default ProductSlice.reducer;