import { configureStore } from "@reduxjs/toolkit";
import userAuthReducers from "./features/authSlice";

const store = configureStore({
  reducer: {
    auth: userAuthReducers,
  },
});

export default store;
