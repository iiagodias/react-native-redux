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

function* sendDeleteTodoRequest({ id }) {
  try {
    const { token } = yield select((state) => state.auth);
    yield call(api.delete, `/task/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    yield put(TodoActions.DeleteTodoSuccess());
    yield put(TodoActions.GetTodoRequest());
  } catch (error) {
    Alert.alert('Aviso', 'Ocorreu um erro ao deletar a tarefa.');
    yield put(TodoActions.DeleteTodoFailed());
  }
}

function* sendCompletedTodoRequest({ id }) {
  try {
    const { token } = yield select((state) => state.auth);
    yield call(
      api.put,
      `/task/${id}`,
      {
        completed: true
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    );
    yield put(TodoActions.CompletedTodoSuccess());
    yield put(TodoActions.GetTodoRequest());
  } catch (error) {
    Alert.alert('Aviso', 'Ocorreu um erro ao atualizar a tarefa.');
    yield put(TodoActions.CompletedTodoFailed());
  }
}

function* sendAddTodoRequest({ description }) {
  try {
    const { token } = yield select((state) => state.auth);
    yield call(
      api.post,
      `/task`,
      {
        description
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    );
    yield put(TodoActions.AddTodoSuccess());
    yield put(TodoActions.GetTodoRequest());
  } catch (error) {
    Alert.alert('Aviso', 'Ocorreu um erro ao cadastrar a tarefa.');
    yield put(TodoActions.AddTodoFailed());
  }
}

function* sendGetTodoRequestWatch() {
  yield takeLatest(Types.GET_TODO_REQUEST, sendGetTodoRequest);
}

function* sendDeleteTodoRequestWatch() {
  yield takeLatest(Types.DELETE_TODO_REQUEST, sendDeleteTodoRequest);
}

function* sendCompletedTodoRequestWatch() {
  yield takeLatest(Types.COMPLETED_TODO_REQUEST, sendCompletedTodoRequest);
}

function* sendAddTodoRequestWatch() {
  yield takeLatest(Types.ADD_TODO_REQUEST, sendAddTodoRequest);
}

export default function* authWatcher() {
  yield all([
    call(sendGetTodoRequestWatch),
    call(sendDeleteTodoRequestWatch),
    call(sendCompletedTodoRequestWatch),
    call(sendAddTodoRequestWatch)
  ]);
}
