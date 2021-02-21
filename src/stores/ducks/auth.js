import { createActions, createReducer } from 'reduxsauce';

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  AuthUserRequest: ['data'],
  AuthUserSuccess: ['data'],
  AuthUserFailed: [],
  LogoutUserRequest: [],
  LogoutUserSuccess: [],
  LogoutUserFailed: []
});

const INITIAL_STATE = {
  data: {},
  token: null,
  logged: false,
  loading: false,
  loadingLogout: false
};

/**
 * Handlers
 */

const authUserRequest = (state = INITIAL_STATE) => ({
  ...state,
  data: {},
  token: null,
  logged: false,
  loading: true
});
const authUserSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  data: action.data?.user,
  token: action.data?.token,
  logged: true,
  loading: false
});
const authUserFailed = (state = INITIAL_STATE) => ({
  ...state,
  data: {},
  token: null,
  logged: false,
  loading: false
});

const logoutUserRequest = (state = INITIAL_STATE) => ({
  ...state,
  loadingLogout: true
});
const logoutUserSuccess = (state = INITIAL_STATE) => ({
  ...state,
  data: {},
  token: null,
  logged: false,
  loadingLogout: false
});
const logoutUserFailed = (state = INITIAL_STATE) => ({
  ...state,
  loadingLogout: false
});
/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.AUTH_USER_REQUEST]: authUserRequest,
  [Types.AUTH_USER_SUCCESS]: authUserSuccess,
  [Types.AUTH_USER_FAILED]: authUserFailed,
  [Types.LOGOUT_USER_REQUEST]: logoutUserRequest,
  [Types.LOGOUT_USER_SUCCESS]: logoutUserSuccess,
  [Types.LOGOUT_USER_FAILED]: logoutUserFailed
});
