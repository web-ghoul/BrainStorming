import { configureStore } from '@reduxjs/toolkit'
import teamsReducer from "./teamsSlice"
import teamReducer from "./teamSlice"
import authReducer from "./authSlice"
import userReducer from "./userSlice"
import sparksReducer from "./sparksSlice"

export const store = configureStore({
  reducer: {
    auth : authReducer ,
    user : userReducer ,
    team : teamReducer ,
    teams : teamsReducer ,
    sparks:sparksReducer
  },
})
