import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos:[]
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        title: action.payload,
        // desc: action.payload.desc,
        completed: false,
      })
    },
    removeTodo(state, action) { },
    toggleTodoComplete(state, action) { },

  }
})

export default todoSlice.reducer;

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;