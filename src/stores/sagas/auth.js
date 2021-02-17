import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../services/api';
import { AuthUserFailed, AuthUserSucess } from '../ducks/auth/actions';
import { types } from '../ducks/auth/types';

function* sendAuthRequest(action) {
  try {
    const response = yield call(
      api.post,
      '/user/login',
      JSON.stringify(action.payload),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
    yield put(AuthUserSucess(response.data));
  } catch (error) {
    yield put(AuthUserFailed(error.message));
  }
}

export default function* authWatcher() {
  yield takeLatest(types.AUTH_USER_REQUEST, sendAuthRequest);
}
