import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";

export const mystore = configureStore({
  reducer: counterSlice,
});
