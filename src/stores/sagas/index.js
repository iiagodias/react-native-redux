import { all } from 'redux-saga/effects';
import authWatcher from './auth';

function* rootSagas() {
  yield all([authWatcher()]);
}

export default rootSagas;
