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
    toggleContextModal(state, action) {
      state.context = action.payload;
    },
  },
});

export default modalSlice.reducer;

export const { toggleContextModal, toggleCreateModal } = modalSlice.actions;
