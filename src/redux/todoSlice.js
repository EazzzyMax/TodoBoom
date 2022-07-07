import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    currentCardId: 0,
    cards: [
      {
        cardName: 'React learning!',
        todos: [
          { id: 0, title: 'Wellcome to TodoBom!', desc: 'Press on me to see more', completed: false },
          { id: 1, title: 'Copmleted Todo', desc: 'Joke!', completed: true },
          { id: 2, title: 'Todo', desc: '', completed: true },
        ],
      },
      {
        cardName: 'Second card!',
        todos: [
          { id: 3, title: 'Wellcome to Second Card!', desc: 'Press on me to see more', completed: false },
          { id: 4, title: 'Copmleted Todo', desc: 'Joke!', completed: true },
        ],
      },
      {
        cardName: 'Third card!',
        todos: [],
      },
    ],
  },
  reducers: {
    addTodo(state, action) {
      state.cards[state.currentCardId].todos.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        desc: action.payload.desc,
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.cards[state.currentCardId].todos = state.cards[state.currentCardId].todos.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
    toggleTodoComplete(state, action) {
      state.cards[state.currentCardId].todos = state.cards[state.currentCardId].todos.map((todo) => {
        if (todo.id === action.payload.id) todo.completed = !todo.completed;
        return todo;
      });
    },
    changeCurrentCard(state, action) {
      state.currentCardId = action.payload.cardId;
    },
  },
});

export default cardsSlice.reducer;

export const { addTodo, removeTodo, toggleTodoComplete, changeCurrentCard } = cardsSlice.actions;
