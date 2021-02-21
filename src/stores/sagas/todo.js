import { Alert } from 'react-native';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as TodoActions, Types } from '../ducks/todo';

function* sendGetTodoRequest() {
  try {
    const { token } = yield select((state) => state.auth);
    const response = yield call(api.get, '/task', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });

    yield put(TodoActions.GetTodoSuccess(response.data.data));
  } catch (error) {
    Alert.alert('Aviso', 'Ocorreu um erro ao sincronizar os dados.');
    yield put(TodoActions.GetTodoFailed());
  }
}

function* sendGetTodoRequestWatch() {
  yield takeLatest(Types.GET_TODO_REQUEST, sendGetTodoRequest);
}

export default function* authWatcher() {
  yield all([call(sendGetTodoRequestWatch)]);
}
