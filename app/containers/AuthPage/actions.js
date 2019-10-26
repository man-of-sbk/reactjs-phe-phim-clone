/*
 *
 * AuthPage actions
 *
 */

import * as actionTypes from './constants';

export function logInAction(payloads) {
  return {
    type: actionTypes.LOGIN_IN_ACTION,
    payloads,
  };
}

export function logInSuccessAction() {
  return {
    type: actionTypes.LOGIN_IN_SUCCESS_ACTION,
  };
}

export function logInFailedAction() {
  return {
    type: actionTypes.LOGIN_IN_FAILED_ACTION,
  };
}

export function signUpAction(payloads) {
  return {
    type: actionTypes.SIGN_UP_ACTION,
    payloads,
  };
}

export function signUpSuccessAction(payloads) {
  return {
    type: actionTypes.SIGN_UP_SUCCESS_ACTION,
    payloads,
  };
}

export function signUpFailedAction(payloads) {
  return {
    type: actionTypes.SIGN_UP_FAILED_ACTION,
    payloads,
  };
}
