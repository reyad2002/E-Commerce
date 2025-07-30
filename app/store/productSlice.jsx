import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// initialState = []
export const fetchProducts = createAsyncThunk(
  "productSlice/fetchProducts",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data; 
  }
);
const productSlice = createSlice({
  name: "productSlice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default productSlice.reducer;
