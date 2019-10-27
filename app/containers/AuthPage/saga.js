import { takeLatest, call, put, all } from 'redux-saga/effects';

import { isResponseFailed } from 'services/handleResponse';
import { requestLogIn, requestRegister } from 'services/requestMethods';

import { accessToken } from 'services/constants';

import { authorizeUserAction } from 'containers/App/actions';
import * as actions from './actions';
import * as actionTypes from './constants';

const saveAccessToken = token => {
  localStorage.setItem(accessToken, token);
};

function* login({ payloads }) {
  const response = yield call(requestLogIn, payloads);

  if (isResponseFailed(response)) {
    yield put(actions.logInFailedAction());
  } else {
    yield call(saveAccessToken, response.data.access_token);
    // console.log(localStorage.getItem(accessToken));
    yield put(authorizeUserAction());
    yield put(actions.logInSuccessAction());
  }
}

function* signup({ payloads }) {
  const response = yield call(requestRegister, payloads);

  if (isResponseFailed(response)) {
    yield put(actions.signUpFailedAction(response.data));
  } else {
    yield put(actions.signUpSuccessAction(response.data));
  }
}

export default function* authPageSaga() {
  yield all([
    yield takeLatest(actionTypes.LOGIN_IN_ACTION, login),
    yield takeLatest(actionTypes.SIGN_UP_ACTION, signup),
  ]);
}
