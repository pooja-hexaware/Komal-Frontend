import { createSlice } from "@reduxjs/toolkit";
import { getAllToppings } from "../actions/toppings.action";

const toppingsSlice = createSlice({
  name: 'toppingsSlice',
  initialState: {
    toppings: [],
    loading: false,
  },
  extraReducers:{
    [getAllToppings.pending]: (state) => {
      state.loading = true;
    },
    [getAllToppings.fulfilled]: (state, action) => {
      state.toppings = action.payload;
      state.loading = false;
    }
  }
})

export default toppingsSlice.reducer;
