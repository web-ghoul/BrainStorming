import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { socket } from "../../app/Main/Main";

export const getSparks = createAsyncThunk("sparks/getSparks", async (args) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${args.team_id}`,
    { headers: { Authorization: `Bearer ${args.token}` } }
  );
  return res.data.data;
});

const initialState = {
  sparks: [],
  isLoading: true,
};

export const sparksSlice = createSlice({
  name: "sparks",
  initialState,
  reducers: {
    receiveMessage: (state) => {
      socket.on("receive_message", (data) => {
        state.sparks.unshift(data);
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSparks.fulfilled, (state, action) => {
      state.sparks = action.payload;
      state.isLoading = false;
    });
  },
});

export const { receiveMessage } = sparksSlice.actions;
export default sparksSlice.reducer;
