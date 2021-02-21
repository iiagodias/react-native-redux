import { createActions, createReducer } from 'reduxsauce';

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  AvatarUpdateRequest: ['data'],
  AvatarUpdateSuccess: [],
  AvatarUpdateFailed: [],
  AvatarDeleteRequest: []
});

const INITIAL_STATE = {
  loadingAvatar: false
};

/**
 * Handlers
 */
const AvatarUpdateRequest = () => ({
  loadingAvatar: true
});

const AvatarUpdateSuccess = () => ({
  loadingAvatar: false
});

const AvatarUpdateFailed = () => ({
  loadingAvatar: false
});

const AvatarDeleteRequest = () => ({
  loadingAvatar: true
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.AVATAR_UPDATE_REQUEST]: AvatarUpdateRequest,
  [Types.AVATAR_UPDATE_SUCCESS]: AvatarUpdateSuccess,
  [Types.AVATAR_UPDATE_FAILED]: AvatarUpdateFailed,
  [Types.AVATAR_DELETE_REQUEST]: AvatarDeleteRequest
});
