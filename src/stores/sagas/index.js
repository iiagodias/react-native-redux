import { all } from 'redux-saga/effects';
import authWatcher from './auth';
import todoWatcher from './todo';
import userWatcher from './user';

function* rootSagas() {
  yield all([authWatcher(), userWatcher(), todoWatcher()]);
}

export default rootSagas;
