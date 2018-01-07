import { ADD_TODO, REMOVE_TODO } from '../constants/action-types';

export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: { title, id: Date.now() },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});