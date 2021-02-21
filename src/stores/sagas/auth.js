import { Alert } from 'react-native';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
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
    Alert.alert('Aviso', 'Usuário ou senha incorreta.');
    yield put(AuthActions.AuthUserFailed(error.message));
  }
}

function* sendLogoutRequest() {
  try {
    const { token } = yield select((state) => state.auth);
    yield call(
      api.post,
      '/user/logout',
      {},
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    yield put(AuthActions.LogoutUserSuccess());
  } catch (error) {
    Alert.alert('Aviso', 'Ocorreu um erro ao finalizar sua sessão..');
    yield put(AuthActions.LogoutUserFailed(error.message));
  }
}

function* sendAuthRequestWatch() {
  yield takeLatest(Types.AUTH_USER_REQUEST, sendAuthRequest);
}
function* sendLogoutRequestWatch() {
  yield takeLatest(Types.LOGOUT_USER_REQUEST, sendLogoutRequest);
}

export default function* authWatcher() {
  yield all([call(sendAuthRequestWatch), call(sendLogoutRequestWatch)]);
}
