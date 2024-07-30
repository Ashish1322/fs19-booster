import { createSlice } from "@reduxjs/toolkit";

let initialvalues = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter slice",
  initialState: initialvalues,

  reducers: {
    increaseCounter: (state, action) => {
      state.counter += action.payload.value;
    },
    decreaseCounter: (state, action) => {
      state.counter -= action.payload.value;
    },
  },
});

export default counterSlice.reducer;
export const { increaseCounter, decreaseCounter } = counterSlice.actions;
