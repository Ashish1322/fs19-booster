import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import counterSlice from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    todosSlice: todoSlice,
    counter: counterSlice,
  },
});
