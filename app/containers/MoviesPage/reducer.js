/* eslint-disable no-case-declarations */
/*
 *
 * MoviesPage reducer
 *
 */
import produce from 'immer';
import * as actionTypes from './constants';

export const initialState = {
  movies: undefined,
  totalPage: undefined,
  // sortType: 0,
  // page: 0, // *** start with 0
  isFetchingMovies: false,
  // fetchMoviesSuccess: false,
  fetchMmoviesFailed: false,
};

/* eslint-disable default-case, no-param-reassign */
const moviesPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.FETCHING_MOVIES_ACTION:
        draft.fetchMmoviesFailed = false;
        draft.isFetchingMovies = true;
        break;
      case actionTypes.FETCHING_MOVIES_SUCCESS_ACTION:
        draft.fetchMmoviesFailed = false;
        draft.isFetchingMovies = false;
        draft.totalPage = action.payloads.total;
        draft.movies = action.payloads.data;
        break;
      case actionTypes.FETCHING_MOVIES_FAILED_ACTION:
        draft.fetchMmoviesFailed = true;
        draft.isFetchingMovies = false;
        draft.totalPage = undefined;
        draft.movies = undefined;
        break;

      case actionTypes.SEARCH_MOVIE_BY_NAME_ACTION:
        draft.isFetchingMovies = true;
        draft.totalPage = undefined;
        break;
      case actionTypes.SEARCH_MOVIE_BY_NAME_SUCCESS_ACTION:
        const foundedMovies = [...action.payloads];
        // foundedMovies.length = 10;
        console.log(foundedMovies);
        draft.movies = foundedMovies;
        draft.isFetchingMovies = false;
        break;
      case actionTypes.SEARCH_MOVIE_BY_NAME_FAILED_ACTION:
        draft.movies = undefined;
        draft.isFetchingMovies = false;
        break;
      // case actionTypes.DEFAULT_ACTION:
      //   break;
    }
  });

export default moviesPageReducer;
