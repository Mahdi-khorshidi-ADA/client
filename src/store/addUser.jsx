import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  bio: "",
  error: "",
};

const addUserSlice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setBio(state, action) {
      state.bio = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const addUserSliceReducer = addUserSlice.reducer;
export const addUserSliceActions = addUserSlice.actions;
