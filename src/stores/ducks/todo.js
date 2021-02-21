import { createActions, createReducer } from 'reduxsauce';

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  GetTodoRequest: [],
  GetTodoSuccess: ['data'],
  GetTodoFailed: [],
  DeleteTodoRequest: ['id'],
  DeleteTodoSuccess: [],
  DeleteTodoFailed: [],
  CompletedTodoRequest: ['id'],
  CompletedTodoSuccess: [],
  CompletedTodoFailed: []
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  todos: [],
  loadingTodos: false,
  loadingDelete: false,
  loadingCompleted: false
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

const deleteTodoRequest = (state = INITIAL_STATE, action) => ({
  ...state,
  loadingDelete: action.id
});
const deleteTodoSucess = (state = INITIAL_STATE) => ({
  ...state,
  loadingDelete: false
});
const deleteTodoFailed = (state = INITIAL_STATE) => ({
  ...state,
  loadingDelete: false
});

const completedTodoRequest = (state = INITIAL_STATE, action) => ({
  ...state,
  loadingCompleted: action.id
});
const completedTodoSucess = (state = INITIAL_STATE) => ({
  ...state,
  loadingCompleted: false
});
const completedTodoFailed = (state = INITIAL_STATE) => ({
  ...state,
  loadingCompleted: false
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.GET_TODO_REQUEST]: getTodoRequest,
  [Types.GET_TODO_SUCCESS]: getTodoSucess,
  [Types.GET_TODO_FAILED]: getTodoFailed,
  [Types.DELETE_TODO_REQUEST]: deleteTodoRequest,
  [Types.DELETE_TODO_SUCCESS]: deleteTodoSucess,
  [Types.DELETE_TODO_FAILED]: deleteTodoFailed,
  [Types.COMPLETED_TODO_REQUEST]: completedTodoRequest,
  [Types.COMPLETED_TODO_SUCCESS]: completedTodoSucess,
  [Types.COMPLETED_TODO_FAILED]: completedTodoFailed
});
