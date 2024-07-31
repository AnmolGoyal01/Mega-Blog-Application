import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  user: null,
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.user = action.payload.user;
      console.log("logged in sucessfully");
    },
    logout: (state) => {
      state.status = false;
      state.user = null;
      console.log("logged out sucessfully");
    },
  },
});

export const { login, logout } = userAuthSlice.actions;

export default userAuthSlice.reducer;
