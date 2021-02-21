import { all } from 'redux-saga/effects';
import authWatcher from './auth';
import userWatcher from './user';

function* rootSagas() {
  yield all([authWatcher(), userWatcher()]);
}

export default rootSagas;
