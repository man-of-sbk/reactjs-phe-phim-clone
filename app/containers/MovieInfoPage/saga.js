import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  requestMovieViaId,
  requestFetchMovieSeats,
  requestSubmitSeats,
} from 'services/requestMethods';
import { isResponseFailed } from 'services/handleResponse';

import * as actionTypes from './constants';
import * as actions from './actions';

function* fetchMovie({ payloads }) {
  const response = yield call(requestMovieViaId, payloads.id);

  if (isResponseFailed(response)) {
    yield put(actions.fetchMovieFailedAction());
  } else {
    yield put(actions.fetchMovieSuccessAction(response.data));
  }
}

function* fetchSeat({ payloads }) {
  const response = yield call(requestFetchMovieSeats, payloads.id);

  if (isResponseFailed(response)) {
    yield put(actions.fetchSeatsFailedAction());
  } else {
    yield put(
      actions.fetchSeatsSuccessAction(JSON.parse(response.data.available_seat)),
    );
  }
}

function* submitSeats({ payloads }) {
  const response = yield call(requestSubmitSeats, payloads);

  if (isResponseFailed(response)) {
    yield put(actions.submitSeatsFailedAction());
  } else {
    yield put(actions.fetchSeatsSuccessAction(response.data.data));
    console.log('after fetching seats success');
    yield put(actions.submitSeatsSuccessAction());
  }
}

// Individual exports for testing
export default function* movieInfoPageSaga() {
  yield all([
    takeLatest(actionTypes.FETCH_MOVIE_ACTION, fetchMovie),
    takeLatest(actionTypes.FETCH_SEATS_ACTION, fetchSeat),
    takeLatest(actionTypes.SUBMIT_SEATS_ACTION, submitSeats),
  ]);
}
