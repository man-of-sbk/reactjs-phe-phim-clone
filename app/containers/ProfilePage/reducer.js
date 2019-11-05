/*
 *
 * ProfilePage reducer
 *
 */
import produce from 'immer';
import * as actionTypes from './constants';

export const initialState = {
  errors: undefined,
  updateUserSuccess: false,
  updateUserAvatarFailed: false,
};

/* eslint-disable default-case, no-param-reassign */
const profilePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.UPDATE_USER_SUCCESS_ACTION:
        draft.errors = undefined;
        draft.updateUserSuccess = true;
        break;
      case actionTypes.UPDATE_USER_FAILED_ACTION:
        draft.errors = action.payloads;
        draft.updateUserSuccess = false;
        break;

      case actionTypes.UPDATE_USER_AVATAR_SUCCESS_ACTION:
        draft.updateUserAvatarFailed = false;
        draft.updateUserSuccess = true;
        break;
      case actionTypes.UPDATE_USER_AVATAR_FAILED_ACTION:
        draft.updateUserSuccess = false;
        draft.updateUserAvatarFailed = true;
        draft.errors = action.payloads;
        break;
      case actionTypes.RESET_UPDATE_STATUS_ACTION:
        draft.updateUserSuccess = false;
        draft.updateUserAvatarFailed = false;
        draft.errors = false;
        break;
      case actionTypes.DEFAULT_ACTION:
        break;
    }
  });

export default profilePageReducer;
