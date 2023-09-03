import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTeam = createAsyncThunk("teams/getTeams", async (team_id) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/Teams/${team_id}`
  );
  return res.data.data;
});

const initialState = {
  team: [],
  sparks:[],
  isLoading: true,
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTeam.fulfilled, (state, action) => {
      state.team = action.payload;
      state.isLoading = false;
    });
  },
});
export default teamSlice.reducer;
