import { all } from 'redux-saga/effects';
import authSaga from './auth';

function* rootSagas() {
  yield all([authSaga]);
}

export default rootSagas;
