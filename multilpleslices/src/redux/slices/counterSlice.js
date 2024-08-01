import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increaseReducer: (state, action) => {
      state.count += 1;
    },
    decreaseReducer: (state, action) => {
      state.count -= 1;
    },
  },
});

export default counterSlice.reducer;
export const { increaseReducer, decreaseReducer } = counterSlice.actions;
