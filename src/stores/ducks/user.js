import { createActions, createReducer } from 'reduxsauce';

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  AvatarUpdateRequest: ['data'],
  AvatarUpdateSuccess: [],
  AvatarUpdateFailed: []
});

const INITIAL_STATE = {
  loading: false
};

/**
 * Handlers
 */
const AvatarUpdateRequest = () => ({
  loading: true
});

const AvatarUpdateSuccess = () => ({
  loading: false
});

const AvatarUpdateFailed = () => ({
  loading: false
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.AVATAR_UPDATE_REQUEST]: AvatarUpdateRequest,
  [Types.AVATAR_UPDATE_SUCCESS]: AvatarUpdateSuccess,
  [Types.AVATAR_UPDATE_FAILED]: AvatarUpdateFailed
});
