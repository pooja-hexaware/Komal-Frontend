import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    cartItems: {},
    totalPrice: 0,
    openDialog: false,
  },
  reducers: {
    updatePrice: (state, action) => {
      Object.assign(state.cartItems, action.payload);
      state.totalPrice = Math.floor(Object.values(state.cartItems).reduce((acc, cur) => acc + cur, 0));
    },
    openDialog: (state) => {
      state.openDialog = true;
    },
    closeDialog: (state) => {
      state.openDialog = false;
    },
  }
})

export const { updatePrice, openDialog, closeDialog } = cartSlice.actions;

export default cartSlice.reducer;
