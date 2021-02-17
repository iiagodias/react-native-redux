import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as AuthActions, Types } from '../ducks/auth';

function* sendAuthRequest(action) {
  try {
    const response = yield call(
      api.post,
      '/user/login',
      JSON.stringify(action.data),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    yield put(AuthActions.AuthUserSuccess(response.data));
  } catch (error) {
    yield put(AuthActions.AuthUserFailed(error.message));
  }
}

export default function* authWatcher() {
  yield takeLatest(Types.AUTH_USER_REQUEST, sendAuthRequest);
}
