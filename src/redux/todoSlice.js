import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    currentCardId: 0,
    cards: [
      {
        id: 101,
        cardName: 'React learning!',
        archived: false,
        todos: [
          { id: 0, title: 'Wellcome to TodoBom!', desc: 'Press on me to see more', completed: false },
          { id: 1, title: 'Copmleted Todo', desc: 'Joke!', completed: true },
          { id: 2, title: 'Todo', desc: '', completed: false },
          { id: 3, title: 'Todo', desc: '', completed: false },
          { id: 4, title: 'Todo', desc: '', completed: false },
          // { id: 5, title: 'Todo', desc: '', completed: false },
          // { id: 6, title: 'Todo', desc: '', completed: false },
          // { id: 7, title: 'Todo', desc: '', completed: false },
          // { id: 8, title: 'Todo', desc: '', completed: false },
          // { id: 9, title: 'Todo', desc: '', completed: false },
          // { id: 10, title: 'Todo', desc: '', completed: false },
          // { id: 11, title: 'Todo', desc: '', completed: false },
          // { id: 12, title: 'Todo', desc: '', completed: false },
          // { id: 13, title: 'Todo', desc: '', completed: false },
          // { id: 14, title: 'Todo', desc: '', completed: false },
          // { id: 15, title: 'Todo', desc: '', completed: false },
          // { id: 16, title: 'Todo', desc: '', completed: false },
          // { id: 17, title: 'Todo', desc: '', completed: false },
          // { id: 18, title: 'Todo', desc: '', completed: false },
          // { id: 19, title: 'Todo', desc: '', completed: false },
        ],
      },
      {
        id: 102,
        cardName: 'Second card!',
        archived: false,
        todos: [
          { id: 3, title: 'Wellcome to Second Card!', desc: 'Press on me to see more', completed: true },
          { id: 4, title: 'Copmleted Todo', desc: 'Joke!', completed: true },
        ],
      },
      {
        id: 103,
        cardName: 'Third card!',
        archived: false,
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
      console.log(action.payload.cardId);
      let id = 0;
      state.cards.forEach((element, index) => {
        if (element.id === action.payload.cardId) id = index;
      });
      console.log(id);
      state.currentCardId = id;
    },
    archiveCurrentCard(state) {
      state.cards[state.currentCardId].archived = true;
    },
  },
});

export default cardsSlice.reducer;

export const { archiveCurrentCard, addTodo, removeTodo, toggleTodoComplete, changeCurrentCard } = cardsSlice.actions;
