import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItem",
  initialState: {
    cartItem: [],
  },
  reducers: {
    updateCartItem: (state, data) => {
      state.cartItem.push(data.payload);
    },
    removeCartItem: (state, data) => {
      state.cartItem.splice(data.payload, 1)
    },
  },
});

export const { updateCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice;
