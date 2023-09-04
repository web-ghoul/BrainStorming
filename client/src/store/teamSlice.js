import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTeam = createAsyncThunk("teams/getTeam", async (args) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/getTeamInfo/${args.team_id}`,
    {
      headers: {
        Authorization: `Bearer ${args.token}`,
      },
    }
  );
  return res.data.data;
});

const initialState = {
  team: null,
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
