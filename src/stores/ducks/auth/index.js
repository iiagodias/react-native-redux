import { types } from './types';

const INITIAL_STATE = {
  data: {},
  token: null,
  logged: false,
  loading: false,
  error: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.AUTH_USER_REQUEST:
      return {
        ...state,
        logged: false,
        loading: true
      };
    case types.AUTH_USER_SUCCESS:
      return {
        ...state,
        data: action.payload?.user,
        token: action.payload?.token,
        logged: true,
        loading: false
      };
    case types.AUTH_USER_FAILED:
      return {
        ...state,
        logged: false,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
