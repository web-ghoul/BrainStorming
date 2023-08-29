import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signed: false,
  user_id: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getAuthData:(state,action)=>{
        state.user_id = action.payload.user_id
        state.token = action.payload.token
        if(state.user_id && state.token){
          state.signed = true
        }
    }
  },
});

export const {getAuthData} = authSlice.actions
export default authSlice.reducer;
