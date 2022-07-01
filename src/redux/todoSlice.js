import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [{ id: 1, title: 'Wellcome to TodoBom!', desc: 'Press on me to see more', completed: false }],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        desc: action.payload.desc,
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoComplete(state, action) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.todo.id) todo.completed = !todo.completed;
      });
    },
  },
});

export default todoSlice.reducer;

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;
