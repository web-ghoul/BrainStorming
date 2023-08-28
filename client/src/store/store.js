import { configureStore } from '@reduxjs/toolkit'
import teamsReducer from "./teamsSlice"


export const store = configureStore({
  reducer: {
    teams : teamsReducer 
  },
})
