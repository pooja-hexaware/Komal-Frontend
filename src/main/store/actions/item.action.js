import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../../axios';

export const getAllItemsByIDs = createAsyncThunk("itemSlice/getAllItemsByIDs", async (ids) => {
  const response = await axios.get(`item/items/findByIds?ids=${ids.toString()}`);
  return response.data;
})
