import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const exists = state.find((element) => element.id === action.payload.id);
      if (!exists || exists) {
        state.push(action.payload);
      }
    },

    deleteProduct: (state, action) => {
      return state.filter((element) => element.id !== action.payload);
    },
    clearCart: (state , action) =>{
      return []
    }
  },
});
export default cartSlice.reducer;
export const { addToCart, deleteProduct , clearCart} = cartSlice.actions;
