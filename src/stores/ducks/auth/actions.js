import { types } from './types';

const AuthUserRequest = (data) => ({
  type: types.AUTH_USER_REQUEST,
  payload: data
});

const AuthUserSucess = (data) => ({
  type: types.AUTH_USER_SUCCESS,
  payload: data
});

const AuthUserFailed = (error) => ({
  type: types.AUTH_USER_FAILED,
  payload: error
});

export { AuthUserRequest, AuthUserSucess, AuthUserFailed };
