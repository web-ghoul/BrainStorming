import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getTeams = createAsyncThunk("teams/getTeams",async()=>{
    const res = await axios.get("Teams")
    return res.data
})

const initialState= {
  teams: [],
  isLoading:true
}

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    [getTeams.pending]:(state,action)=>{
        state.isLoading = true
    },
    [getTeams.fulfilled]:(state,action)=>{
        console.log(actions)
        teams = action.payload
        state.isLoading = false
    },
    [getTeams.rejected]:(state,action)=>{
        state.isLoading = true
    },
  },
})

export default teamsSlice.reducer