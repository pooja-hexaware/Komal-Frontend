import { createSlice } from "@reduxjs/toolkit";
import { getAllItemsByIDs } from "../actions/item.action";

const itemSlice = createSlice({
  name: 'itemSlice',
  initialState: {
    items: [],
    loading: false,
  },
  extraReducers:{
    [getAllItemsByIDs.pending]: (state) => {
      state.loading = true;
    },
    [getAllItemsByIDs.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    }
  }
})

export default itemSlice.reducer;
