import { createSlice } from "@reduxjs/toolkit";


//import the fetch function
import fetchSliders from "./SliderAsync";


const initialState = {
    SliceIsLoading : false,
    Slice_data : [],
    SliceError : ""
}

const SliderSlice = createSlice({
       name : "Slider",
       initialState : initialState,
       reducer : {

       },
       extraReducers : builder => {
        builder.addCase(fetchSliders.pending, state => {
            state.SliceIsLoading = true
            state.Slice_data = []
            state.SliceError = ""
        })
        builder.addCase(fetchSliders.fulfilled, (state, action) => {
            state.SliceIsLoading = false
            state.Slice_data = action.payload
            state.SliceError = ""
        })
        builder.addCase(fetchSliders.rejected, (state, action) => {
            state.SliceIsLoading = false
            state.Slice_data = []
            state.SliceError = action.error.message
        })
       }
})

export default SliderSlice.reducer;