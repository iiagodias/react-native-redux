import { Alert, Platform } from 'react-native';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as UserActions, Types } from '../ducks/user';

function* sendAvatarUpdateRequest({ data }) {
  try {
    const { token } = yield select((state) => state.auth);

    const foto =
      Platform.OS === 'android' ? data.uri : data.uri.replace('file://', '');
    if (!data.fileName) data.fileName = foto.split('/').pop();

    const body = new FormData();
    body.append('avatar', { uri: foto, name: data.fileName, type: data.type });

    yield call(api.post, '/user/me/avatar', body, {
      headers: { Authorization: `Bearer ${token}` }
    });

    yield put(UserActions.AvatarUpdateSuccess());
  } catch (error) {
    Alert.alert('Aviso', 'Ocorreu um erro ao alterar sua foto.');
    yield put(UserActions.AvatarUpdateFailed());
  }
}

function* sendAvatarDeleteRequest() {
  try {
    const { token } = yield select((state) => state.auth);

    yield call(api.delete, '/user/me/avatar', {
      headers: { Authorization: `Bearer ${token}` }
    });

    yield put(UserActions.AvatarUpdateSuccess());
  } catch (error) {
    Alert.alert('Aviso', 'Ocorreu um erro ao deletar sua foto.');
    yield put(UserActions.AvatarUpdateFailed());
  }
}

function* sendAvatarUpdateRequestWatch() {
  yield takeLatest(Types.AVATAR_UPDATE_REQUEST, sendAvatarUpdateRequest);
}

function* sendAvatarDeleteRequestWatch() {
  yield takeLatest(Types.AVATAR_DELETE_REQUEST, sendAvatarDeleteRequest);
}

export default function* userWatcher() {
  yield all([
    call(sendAvatarUpdateRequestWatch),
    call(sendAvatarDeleteRequestWatch)
  ]);
}
