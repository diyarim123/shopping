import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk("/ProductSlice", async ({ start, end }, thunkAPI) => {
  const URL = `https://fronttask.techeyeco.com/api/ClientSide/GetProducts?start=${start}&end=${end}`;
  const response = await fetch(URL, {signal : thunkAPI.signal});
  return response.json();
});

export default fetchProducts;
