/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import * as actionTypes from './constants';

export const initialState = {
  isFetchingMovies: false,
  hotMovies: undefined,
  latestMovies: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.FETCH_MOVIES_ACTION:
        draft.isFetchingMovies = true;
        break;

      case actionTypes.FETCH_HOT_MOVIES_SUCCESS_ACTION:
        draft.hotMovies = action.payloads;
        draft.isFetchingMovies = false;
        break;
      case actionTypes.FETCH_HOT_MOVIES_FAILED_ACTION:
        draft.isFetchingMovies = false;
        break;

      case actionTypes.FETCH_LATEST_MOVIES_SUCCESS_ACTION:
        draft.latestMovies = action.payloads;
        draft.isFetchingMovies = false;
        break;
      case actionTypes.FETCH_LATEST_MOVIES_FAILED_ACTION:
        draft.isFetchingMovies = false;
        break;
    }
  });

export default appReducer;
