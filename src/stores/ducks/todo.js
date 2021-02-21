import { createActions, createReducer } from 'reduxsauce';

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  GetTodoRequest: [],
  GetTodoSuccess: ['data'],
  GetTodoFailed: []
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  todos: [],
  loadingTodos: false
};

const getTodoRequest = (state = INITIAL_STATE) => ({
  ...state,
  loadingTodos: true
});

const getTodoSucess = (state = INITIAL_STATE, action) => ({
  ...state,
  todos: action.data,
  loadingTodos: false
});

const getTodoFailed = (state = INITIAL_STATE) => ({
  ...state,
  loadingTodos: false
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.GET_TODO_REQUEST]: getTodoRequest,
  [Types.GET_TODO_SUCCESS]: getTodoSucess,
  [Types.GET_TODO_FAILED]: getTodoFailed
});
