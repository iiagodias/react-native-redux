import { createActions, createReducer } from 'reduxsauce';

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  AuthUserRequest: ['data'],
  AuthUserSuccess: ['data'],
  AuthUserFailed: ['error']
});

const INITIAL_STATE = {
  data: {},
  token: null,
  logged: false,
  loading: false,
  error: null
};

/**
 * Handlers
 */
const authUserRequest = (state = INITIAL_STATE) => ({
  ...state,
  logged: false,
  loading: true,
  error: null
});

const authUserSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  data: action.data?.user,
  token: action.data?.token,
  logged: true,
  loading: false,
  error: null
});

const authUserFailed = (state = INITIAL_STATE, action) => ({
  ...state,
  logged: false,
  loading: false,
  error: action.error
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.AUTH_USER_REQUEST]: authUserRequest,
  [Types.AUTH_USER_SUCCESS]: authUserSuccess,
  [Types.AUTH_USER_FAILED]: authUserFailed
});
