/*
 *
 * MovieInfoPage reducer
 *
 */
import produce from 'immer';
import * as actionTypes from './constants';

export const initialState = {
  movie: undefined,
  isFetchingMovie: false,

  isFetchingSeats: false,
  seats: undefined,

  submittingSeatsSuccess: false,
  submittingSeatsFailed: false,
};

/* eslint-disable default-case, no-param-reassign */
const movieInfoPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.FETCH_MOVIE_ACTION:
        draft.movie = undefined;
        draft.isFetchingMovie = true;
        break;
      case actionTypes.FETCH_MOVIE_SUCCESS_ACTION:
        draft.movie = action.payloads;
        draft.isFetchingMovie = false;
        break;
      case actionTypes.FETCH_MOVIE_FAILED_ACTION:
        draft.movie = undefined;
        draft.isFetchingMovie = false;
        break;

      case actionTypes.FETCH_SEATS_ACTION:
        draft.seats = undefined;
        draft.isFetchingSeats = true;
        break;
      case actionTypes.FETCH_SEATS_SUCCESS_ACTION:
        draft.seats = action.payloads;
        draft.isFetchingSeats = false;
        break;
      case actionTypes.FETCH_SEATS_FAILED_ACTION:
        draft.seats = undefined;
        draft.isFetchingSeats = false;
        break;

      case actionTypes.SUBMIT_SEATS_ACTION:
        draft.isFetchingSeats = true;
        break;
      case actionTypes.SUBMIT_SEATS_SUCCESS_ACTION:
        draft.submittingSeatsSuccess = true;
        draft.submittingSeatsFailed = false;
        draft.isFetchingSeats = false;
        break;
      case actionTypes.SUBMIT_SEATS_FAILED_ACTION:
        draft.submittingSeatsSuccess = false;
        draft.submittingSeatsFailed = true;
        draft.isFetchingSeats = false;
        break;
      case actionTypes.RESET_SUBMIT_SEATS_SUCCESS_ACTION:
        draft.submittingSeatsSuccess = false;
        break;
      case actionTypes.DEFAULT_ACTION:
        break;
    }
  });

export default movieInfoPageReducer;
