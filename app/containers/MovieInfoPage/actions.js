/*
 *
 * MovieInfoPage actions
 *
 */

import * as actionTypes from './constants';

export function defaultAction() {
  return {
    type: actionTypes.DEFAULT_ACTION,
  };
}

export function fetchMovieAction(payloads) {
  return {
    type: actionTypes.FETCH_MOVIE_ACTION,
    payloads,
  };
}

export function fetchMovieSuccessAction(payloads) {
  return {
    type: actionTypes.FETCH_MOVIE_SUCCESS_ACTION,
    payloads,
  };
}

export function fetchMovieFailedAction() {
  return {
    type: actionTypes.FETCH_MOVIE_FAILED_ACTION,
  };
}

export function fetchSeatsAction(payloads) {
  return {
    type: actionTypes.FETCH_SEATS_ACTION,
    payloads,
  };
}

export function fetchSeatsFailedAction() {
  return {
    type: actionTypes.FETCH_SEATS_FAILED_ACTION,
  };
}

export function fetchSeatsSuccessAction(payloads) {
  return {
    type: actionTypes.FETCH_SEATS_SUCCESS_ACTION,
    payloads,
  };
}

export function submitSeatsAction(payloads) {
  return {
    type: actionTypes.SUBMIT_SEATS_ACTION,
    payloads,
  };
}

export function submitSeatsSuccessAction() {
  return {
    type: actionTypes.SUBMIT_SEATS_SUCCESS_ACTION,
  };
}

export function submitSeatsFailedAction(payloads) {
  return {
    type: actionTypes.SUBMIT_SEATS_FAILED_ACTION,
    payloads,
  };
}

export function resetSubmitSeatsSuccessAction() {
  return {
    type: actionTypes.RESET_SUBMIT_SEATS_SUCCESS_ACTION,
  };
}
