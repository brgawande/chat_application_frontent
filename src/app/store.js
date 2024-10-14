import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../app/reducers/authReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
