import { takeLatest, call, put, all, fork } from 'redux-saga/effects';

import { isResponseFailed } from 'services/handleResponse';
import {
  requestFetchHotMovies,
  requestFetchLatestMovies,
  requestAuthorizeUser,
} from 'services/requestMethods';

import * as actionTypes from './constants';
import * as actions from './actions';

function* fetchHotMovies() {
  const response = yield call(requestFetchHotMovies);

  if (isResponseFailed(response)) {
    yield put(actions.fetchHotMoviesFailedAction());
  } else {
    yield put(actions.fetchHotMoviesSuccessAction(response.data.data));
  }
}

function* fetchLatestMovies() {
  const response = yield call(requestFetchLatestMovies);

  if (isResponseFailed(response)) {
    yield put(actions.fetchLatestMoviesFailedAction());
  } else {
    yield put(actions.fetchLatestMoviesSuccessAction(response.data.data));
  }
}

function* fetchMoviesFlow() {
  yield fork(fetchHotMovies);
  yield fork(fetchLatestMovies);
}

function* authorizeUser() {
  const response = yield call(requestAuthorizeUser);

  if (isResponseFailed(response)) {
    yield put(actions.authorizeUserFailedAction());
  } else {
    yield put(actions.authorizeUserSuccessAction());
  }
}

export default function* appSaga() {
  yield all([
    takeLatest(actionTypes.FETCH_MOVIES_ACTION, fetchMoviesFlow),
    takeLatest(actionTypes.AUTHORIZE_USER_ACTION, authorizeUser),
  ]);
}
