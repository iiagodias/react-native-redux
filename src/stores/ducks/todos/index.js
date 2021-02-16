import { types } from './types';

const INITIAL_STATE = {
  todos: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case types.REMOVE_TODO: {
      const newTodo = state.todos.filter((item) => item.id !== action.payload);
      return { ...state, todos: newTodo };
    }
    default:
      return state;
  }
};

export default reducer;
