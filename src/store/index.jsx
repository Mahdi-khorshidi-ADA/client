import { configureStore } from "@reduxjs/toolkit";
import {userSliceReducers} from "./UserSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReducers,
  },
});
