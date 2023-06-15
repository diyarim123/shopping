import { createAsyncThunk } from "@reduxjs/toolkit";



// the URL
const URL = "https://fronttask.techeyeco.com/api/ClientSide/GetCurrentGroupProducts?GroupProductType=NewArrivals";


const fetchArrivals = createAsyncThunk("/ArrivalsSlice", () => {
    return (
        fetch(URL)
        .then(response => response.json())
    )
})

export default fetchArrivals;