import { types } from './types';

const AuthUserRequest = (data) => ({
  type: types.AUTH_USER_REQUEST,
  payload: data
});

const AuthUserSetData = (data) => ({
  type: types.AUTH_USER_SUCCESS,
  payload: data
});

export { AuthUserRequest, AuthUserSetData };
