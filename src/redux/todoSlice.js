import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [{
      id: 1,
      title: 'Wellcome to TodoBom!',
      desc: 'Press on me to see more',
      completed: false,
    }],
    currentTodo: {},
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
    toggleTodoComplete(state, action) {},
    dispatchCurrentTodo(state, action) {
      state.currentTodo = action.payload.todo;
    },
  },
});

export default todoSlice.reducer;

export const { addTodo, removeTodo, toggleTodoComplete, dispatchCurrentTodo} = todoSlice.actions;
