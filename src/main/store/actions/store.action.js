import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../../axios';
import { getAllItemsByIDs } from "./item.action";

export const getAllStores = createAsyncThunk("storeSlice/getAllStores", async () => {
  const response = await axios.get('store');
  return response.data;
})

export const getStoreById = createAsyncThunk("storeSlice/getStoreById", async (id, thunkAPI) => {
  const response = await axios.get(`store/${id}`);
  thunkAPI.dispatch(getAllItemsByIDs(response.data.menu));
  return response.data;
})
