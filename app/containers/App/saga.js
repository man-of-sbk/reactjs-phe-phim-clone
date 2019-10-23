import { takeLatest, call, put, select, all } from 'redux-saga/effects';

import * as actionTypes from './constants';

function* fetchMovies() {
  console.log('fetch movies');
}

// Individual exports for testing
export default function* appSaga() {
  yield all([takeLatest(actionTypes.FETCH_MOVIES_ACTION, fetchMovies)]);
}
