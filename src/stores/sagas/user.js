import { Alert, Platform } from 'react-native';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as UserActions, Types } from '../ducks/user';

function* sendAvatarRequest({ data }) {
  try {
    const { token } = yield select((state) => state.auth);

    const foto =
      Platform.OS === 'android' ? data.uri : data.uri.replace('file://', '');
    if (!data.fileName) data.fileName = foto.split('/').pop();

    const body = new FormData();
    body.append('avatar', { uri: foto, name: data.fileName, type: data.type });

    const response = yield call(api.post, '/user/me/avatar', body, {
      headers: { Authorization: `Bearer ${token}` }
    });

    yield put(UserActions.AvatarUpdateSuccess(response.data));
  } catch (error) {
    Alert.alert('Aviso', 'Ocorreu um erro ao alterar sua foto.');
    yield put(UserActions.AvatarUpdateFailed());
  }
}

export default function* userWatcher() {
  yield takeLatest(Types.AVATAR_UPDATE_REQUEST, sendAvatarRequest);
}
