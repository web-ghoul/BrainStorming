import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";


export const getSparks = createAsyncThunk("sparks/getSparks", async (args) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/Ideas/${args.team_id}`,
    { headers: { Authorization: `Bearer ${args.token}` } }
  );
  return res.data.data;
});

const initialState = {
  sparks: null,
  isLoading: true,
};

export const sparksSlice = createSlice({
  name: "sparks",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSparks.fulfilled, (state, action) => {
      state.sparks = action.payload;
      state.isLoading = false;
    });
  },
});

export default sparksSlice.reducer;
