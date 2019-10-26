/*
 *
 * App actions
 *
 */

import * as actionTypes from './constants';

export function fetchMoviesAction() {
  return {
    type: actionTypes.FETCH_MOVIES_ACTION,
  };
}

export function fetchHotMoviesSuccessAction(payloads) {
  return {
    type: actionTypes.FETCH_HOT_MOVIES_SUCCESS_ACTION,
    payloads,
  };
}

export function fetchHotMoviesFailedAction() {
  return {
    type: actionTypes.FETCH_HOT_MOVIES_FAILED_ACTION,
  };
}

export function fetchLatestMoviesSuccessAction(payloads) {
  return {
    type: actionTypes.FETCH_LATEST_MOVIES_SUCCESS_ACTION,
    payloads,
  };
}

export function fetchLatestMoviesFailedAction() {
  return {
    type: actionTypes.FETCH_LATEST_MOVIES_FAILED_ACTION,
  };
}

export function authorizeUserAction() {
  return {
    type: actionTypes.AUTHORIZE_USER_ACTION,
  };
}

export function authorizeUserSuccessAction() {
  return {
    type: actionTypes.AUTHORIZE_USER_SUCCESS_ACTION,
  };
}

export function authorizeUserFailedAction() {
  return {
    type: actionTypes.AUTHORIZE_USER_FAILED_ACTION,
  };
}
