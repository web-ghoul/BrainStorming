import { configureStore } from '@reduxjs/toolkit'
import teamsReducer from "./teamsSlice"
import authReducer from "./authSlice"
import userReducer from "./userSlice"
import sparksReducer from "./sparksSlice"

export const store = configureStore({
  reducer: {
    auth : authReducer ,
    user : userReducer ,
    teams : teamsReducer ,
    sparks:sparksReducer
  },
})
