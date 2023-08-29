import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTeams = createAsyncThunk("teams/getTeams", async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/Teams`);
  return res.data;
});

const initialState = {
  teams: null,
  isLoading: true,
};

export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getTeams.fulfilled, (state, action) => {
      // Add user to the state array
      state.teams = action.payload
    })
  },
});

export default teamsSlice.reducer;
