import { ADD_TODO, REMOVE_TODO } from '../constants/action-types';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case REMOVE_TODO:
      return { ...state, todos: state.todos.filter((i) => i.id !== action.payload.id) };
    default:
      return state;
  }
};

export default reducer;