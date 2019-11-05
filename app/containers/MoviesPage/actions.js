/*
 *
 * MoviesPage actions
 *
 */

import * as actionTypes from './constants';

export function defaultAction() {
  return {
    type: actionTypes.DEFAULT_ACTION,
  };
}

export function fetchMoviesAction(payloads) {
  return {
    type: actionTypes.FETCHING_MOVIES_ACTION,
    payloads,
  };
}

export function fetchMoviesSuccessAction(payloads) {
  return {
    type: actionTypes.FETCHING_MOVIES_SUCCESS_ACTION,
    payloads,
  };
}

export function fetchMoviesFailedAction() {
  return {
    type: actionTypes.FETCHING_MOVIES_FAILED_ACTION,
  };
}

export function searchMovieByNameAction(payloads) {
  return {
    type: actionTypes.SEARCH_MOVIE_BY_NAME_ACTION,
    payloads,
  };
}

export function searchMovieByNameSuccessAction(payloads) {
  return {
    type: actionTypes.SEARCH_MOVIE_BY_NAME_SUCCESS_ACTION,
    payloads,
  };
}

export function searchMovieByNameFailedAction() {
  return {
    type: actionTypes.SEARCH_MOVIE_BY_NAME_FAILED_ACTION,
  };
}
