import { createSlice } from "@reduxjs/toolkit";
import { getAllStores, getStoreById } from "../actions/store.action";

const storeSlice = createSlice({
  name: 'storeSlice',
  initialState: {
    stores: [],
    activeStore: {},
    loading: false,
  },
  extraReducers:{
    [getAllStores.pending]: (state) => {
      state.loading = true;
    },
    [getAllStores.fulfilled]: (state, action) => {
      state.stores = action.payload;
      state.loading = false;
    },
    [getStoreById.pending]: (state) => {
      state.loading = true;
    },
    [getStoreById.fulfilled]: (state, action) => {
      state.activeStore = action.payload;
      state.loading = false;
    }
  }
})

export default storeSlice.reducer;