import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'
import modalReducer from './modalSlice'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    modals: modalReducer,
  }
})

