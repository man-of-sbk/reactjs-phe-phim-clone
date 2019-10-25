/*
 *
 * AuthPage actions
 *
 */

import * as actionTypes from './constants';

export function logInAction() {
  return {
    type: actionTypes.LOGIN_IN_ACTION,
  };
}

export function logInSuccessAction(payloads) {
  return {
    type: actionTypes.LOGIN_IN_SUCCESS_ACTION,
    payloads,
  };
}

export function logInFailedAction(payloads) {
  return {
    type: actionTypes.LOGIN_IN_FAILED_ACTION,
    payloads,
  };
}

export function signUpAction() {
  return {
    type: actionTypes.SIGN_UP_ACTION,
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
