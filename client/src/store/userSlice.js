import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserData = createAsyncThunk("user/getUserData", async (user_id) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/Profile/${user_id}`
  );
  return res.data;
});

const initialState = {
  userData: null,
  isLoading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.isLoading = false
    });
  },
});

export default userSlice.reducer;
