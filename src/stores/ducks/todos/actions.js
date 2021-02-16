import { types } from './types';

const addTodo = (todo) => ({
  type: types.ADD_TODO,
  payload: todo
});

const removeTodo = (id) => ({
  type: types.REMOVE_TODO,
  payload: id,
});

export { addTodo, removeTodo };

