import { createSlice, nanoid } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => [...state, action.payload],
      prepare: todo => ({ payload: { ...todo, id: nanoid() } }),
    },
    deleteTodo: (state, action) =>
      state.filter(todo => action.payload !== todo.id),
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;

export const getTodos = state => state.todos;
