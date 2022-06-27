import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modals',
  initialState: {
    create: false,
    context: false,
  },
  reducers: {
    toggleCreateModal(state, action) {
      state.create = action.payload;
    },
  },
});

export default modalSlice.reducer;

export const { toggleCreateModal } = modalSlice.actions;
