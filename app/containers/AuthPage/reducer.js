/*
 *
 * AuthPage reducer
 *
 */
import produce from 'immer';
import * as actionTypes from './constants';

export const initialState = {
  // errors: undefined,
  isSubmitting: false,
  // submitSuccess: false,

  signUpErrors: undefined,
  signUpSuccess: false,

  logInErrors: undefined,
  logInSuccess: false,
};

/* eslint-disable default-case, no-param-reassign */
const authPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.LOGIN_IN_ACTION:
        draft.isSubmitting = true;
        break;

      case actionTypes.LOGIN_IN_SUCCESS_ACTION:
        draft.logInErrors = undefined;
        draft.isSubmitting = false;
        draft.logInSuccess = true;

        break;

      case actionTypes.LOGIN_IN_FAILED_ACTION:
        // *** log in failed message will be handled in frontend. Thus,
        // ***** there's no reason to use payloads from a response
        draft.logInErrors = true;
        draft.isSubmitting = false;
        draft.logInSuccess = false;
        break;

      case actionTypes.SIGN_UP_ACTION:
        draft.isSubmitting = true;
        break;

      case actionTypes.SIGN_UP_SUCCESS_ACTION:
        draft.signUpErrors = undefined;
        draft.isSubmitting = false;
        draft.signUpSuccess = true;
        break;

      case actionTypes.SIGN_UP_FAILED_ACTION:
        draft.signUpErrors = action.payloads;
        draft.isSubmitting = false;
        draft.signUpSuccess = false;
        break;

      case actionTypes.RESET_SUBMIT_SUCCESS_ACTION:
        draft.signUpSuccess = false;
        draft.logInSuccess = false;
        break;

      case actionTypes.RESET_SUBMIT_FAILED_ACTION:
        draft.signUpErrors = undefined;
        draft.logInErrors = undefined;
        break;
    }
  });

export default authPageReducer;
