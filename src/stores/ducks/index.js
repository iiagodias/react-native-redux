import { combineReducers } from 'redux';
import auth from './auth';
import todos from './todo';

export default combineReducers({ todos, auth });
