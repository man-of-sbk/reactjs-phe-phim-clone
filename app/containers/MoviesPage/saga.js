import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  requestFetchSortedMoviesList,
  requestSearchMovieByName,
} from 'services/requestMethods';
import { isResponseFailed } from 'services/handleResponse';

import * as actionTypes from './constants';
import * as actions from './actions';

function* fetchMovies({ payloads }) {
  // *** payload should be:
  // {
  //   sort,
  //   page,
  // },
  const response = yield call(requestFetchSortedMoviesList, payloads);

  if (isResponseFailed(response)) {
    yield put(actions.fetchMoviesFailedAction());
  } else {
    yield put(actions.fetchMoviesSuccessAction(response.data));
  }
}

function* searchMovieByName({ payloads }) {
  const response = yield call(requestSearchMovieByName, payloads);

  if (isResponseFailed(response)) {
    yield put(actions.searchMovieByNameFailedAction());
  } else {
    yield put(actions.searchMovieByNameSuccessAction(response.data));
  }
}

export default function* moviesPageSaga() {
  yield all([
    yield takeLatest(actionTypes.FETCHING_MOVIES_ACTION, fetchMovies),
    yield takeLatest(
      actionTypes.SEARCH_MOVIE_BY_NAME_ACTION,
      searchMovieByName,
    ),
  ]);
}
