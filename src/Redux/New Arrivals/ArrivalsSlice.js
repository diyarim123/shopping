import { createSlice } from "@reduxjs/toolkit";


//import the fetch function
import fetchArrivals from "./ArrivalsAsync";

const initialState= {
    arrivals_isLoading : false,
    arrivals_data : [],
    arrivals_error : ""
}


const ArrivalsSlice = createSlice({
    name : "arrivals",
    initialState : initialState,
    reducer : {

    },
    extraReducers : builder => {
        builder.addCase(fetchArrivals.pending, state => {
            state.arrivals_isLoading = true
            state.arrivals_data = []
            state.arrivals_error = ""
        })
        builder.addCase(fetchArrivals.fulfilled, (state, action) => {
            state.arrivals_isLoading = false
            state.arrivals_data = action.payload
            state.arrivals_error = ""
        })
        builder.addCase(fetchArrivals.rejected, (state, action) => {
            state.arrivals_isLoading = false
            state.arrivals_data = []
            state.arrivals_error = action.error.message
        })
    }
})

export default ArrivalsSlice.reducer;