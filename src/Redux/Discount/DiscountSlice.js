import { createSlice } from "@reduxjs/toolkit";


//import the fetch function
import fetchDiscount from "./DiscountAsync";


const initialState = {
    discount_isLoading : false,
    discount_data : [],
    discount_error : ""
}

const DiscountSlice = createSlice({
    name : "discount",
    initialState : initialState,
    reducer : {

    },
    extraReducers : builder => {
        builder.addCase(fetchDiscount.pending, state => {
            state.discount_isLoading = true
            state.discount_data = []
            state.discount_error = ""
        })
        builder.addCase(fetchDiscount.fulfilled, (state, action) => {
            state.discount_isLoading = false
            state.discount_data = action.payload
            state.discount_error = ""
        })
        builder.addCase(fetchDiscount.rejected, (state, action) => {
            state.discount_isLoading = false
            state.discount_data = []
            state.discount_error = action.error.message
        })
    }
})


export default DiscountSlice.reducer;