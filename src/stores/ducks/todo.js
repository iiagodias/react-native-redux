import { createActions, createReducer } from 'reduxsauce';

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  addTodo: ['todo'],
  removeTodo: ['id']
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  todos: []
};

const addTodo = (state = INITIAL_STATE, action) => ({
  ...state,
  todos: [...state.todos, action.todo]
});

const removeTodo = (state = INITIAL_STATE, action) => {
  const newTodo = state.todos.filter((item) => item.id !== action.id);
  return { ...state, todos: newTodo };
};

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: addTodo,
  [Types.REMOVE_TODO]: removeTodo
});
