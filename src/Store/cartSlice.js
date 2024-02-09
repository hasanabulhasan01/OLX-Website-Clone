import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cartItem',
  initialState: {
    cartItem: []
  },
  reducers: {
    updateCartItem: (state, data) => {
      state.cartItem.push(data.payload);
    }
  }
})

export const { updateCartItem } = cartSlice.actions
export default cartSlice;