import { createAsyncThunk } from "@reduxjs/toolkit";


const URL = "https://fronttask.techeyeco.com/api/ClientSide/GetGroup?GroupProductType=FrontPageSlider";



const fetchSliders = createAsyncThunk("/SlidersSlice", () => {
    return (
        fetch(URL)
        .then(response => response.json())
    )
})

export default fetchSliders;