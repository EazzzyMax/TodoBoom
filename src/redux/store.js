import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './todoSlice';

export const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
});
