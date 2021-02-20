import { createActions, createReducer } from 'reduxsauce';

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  AuthUserRequest: ['data'],
  AuthUserSuccess: ['data'],
  AuthUserFailed: []
});

const INITIAL_STATE = {
  data: {},
  token: null,
  logged: false,
  loading: false
};

/**
 * Handlers
 */
const authUserRequest = () => ({
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

const authUserFailed = () => ({
  data: {},
  token: null,
  logged: false,
  loading: false
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.AUTH_USER_REQUEST]: authUserRequest,
  [Types.AUTH_USER_SUCCESS]: authUserSuccess,
  [Types.AUTH_USER_FAILED]: authUserFailed
});
