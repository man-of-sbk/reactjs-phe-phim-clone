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

export function fetchMoviesSuccessAction() {
  return {
    type: actionTypes.FETCH_MOVIES_SUCCESS_ACTION,
  };
}

export function fetchMoviesFailedAction() {
  return {
    type: actionTypes.FETCH_MOVIES_FAILED_ACTION,
  };
}
