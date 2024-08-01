import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo slice",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const title = action.payload.title;
      const desc = action.payload.desc;
      state.todos.push({ title, description: desc });
    },
    deleteTodo: (state, action) => {
      const index = action.payload.index;
      state.todos.splice(index, 1);
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo } = todoSlice.actions;
