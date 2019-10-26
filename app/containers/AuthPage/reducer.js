/*
 *
 * AuthPage reducer
 *
 */
import produce, { isDraft } from 'immer';
import * as actionTypes from './constants';

export const initialState = {
  errors: undefined,
  isSubmitting: false,
  submitSuccess: false,
};

/* eslint-disable default-case, no-param-reassign */
const authPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.LOGIN_IN_ACTION:
        draft.isSubmitting = true;
        break;

      case actionTypes.LOGIN_IN_SUCCESS_ACTION:
        draft.isSubmitting = false;
        draft.submitSuccess = true;
        break;

      case actionTypes.LOGIN_IN_FAILED_ACTION:
        draft.isSubmitting = false;
        draft.submitSuccess = false;
        break;

      case actionTypes.SIGN_UP_ACTION:
        draft.isSubmitting = true;
        break;

      case actionTypes.SIGN_UP_SUCCESS_ACTION:
        draft.errors = undefined;
        draft.isSubmitting = false;
        draft.submitSuccess = true;
        break;

      case actionTypes.SIGN_UP_FAILED_ACTION:
        draft.errors = action.payloads;
        draft.isSubmitting = false;
        draft.submitSuccess = false;
        break;
    }
  });

export default authPageReducer;
