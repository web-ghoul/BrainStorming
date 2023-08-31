import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTeams = createAsyncThunk("teams/getTeams", async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/Teams`);
  return res.data.data;
});

const initialState = {
  teams: null,
  isLoading: true,
};

export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTeams.fulfilled, (state, action) => {
      state.teams = action.payload
      state.isLoading = false
    })
  },
});

export default teamsSlice.reducer;
