import { createAsyncThunk } from "@reduxjs/toolkit";


const URL = "https://fronttask.techeyeco.com/api/ClientSide/GetCurrentGroupProducts?GroupProductType=Discount";


const fetchDiscount = createAsyncThunk("/DiscountSlice", () => (
    fetch(URL)
    .then(response => response.json())
))


export default fetchDiscount;