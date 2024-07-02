import { configureStore } from "@reduxjs/toolkit";
import { userSliceReducers } from "./UserSlice";
import { addUserSliceReducer } from "./addUser";

export const store = configureStore({
  reducer: {
    user: userSliceReducers,
    addUser: addUserSliceReducer,
  },
});
