import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './todoSlice'
import modalReducer from './modalSlice'

export const store = configureStore({
  reducer: {
    cards: cardReducer,
    modals: modalReducer,
  }
})

