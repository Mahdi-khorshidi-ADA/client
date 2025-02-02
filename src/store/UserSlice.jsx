import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  error: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const userSliceReducers = userSlice.reducer;
export const userActions = userSlice.actions;
