import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const exists = state.find((element) => element.id === action.payload.id);
      if (exists) {
        exists.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.find((element) => element.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((element) => element.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    deleteProduct: (state, action) => {
      return state.filter((element) => element.id !== action.payload);
    },
    clearCart: (state, action) => {
      return [];
    },
  },
});
export default cartSlice.reducer;
export const {
  addToCart,
  deleteProduct,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} = cartSlice.actions;
