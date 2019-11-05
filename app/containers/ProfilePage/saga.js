import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  requestUpdateUser,
  requestUpdateUserAvatar,
} from 'services/requestMethods';
import { authorizeUserAction } from 'containers/App/actions';
import { isResponseFailed } from 'services/handleResponse';

import * as actionTypes from './constants';
import * as actions from './actions';

function* updateUser({ payloads }) {
  const response = yield call(requestUpdateUser, payloads);

  if (isResponseFailed(response)) {
    yield put(actions.updateUserFailedAction(response.data));
  } else {
    yield put(authorizeUserAction());
    yield put(actions.updateUserSuccessAction());
  }
}

function* updateUserAvatar({ payloads }) {
  const response = yield call(requestUpdateUserAvatar, payloads);

  if (isResponseFailed(response)) {
    yield put(actions.updateUserAvatarFailedAction());
  } else {
    yield put(authorizeUserAction());
    yield put(actions.updateUserAvatarSuccessAction());
  }
}

export default function* profilePageSaga() {
  yield all([
    yield takeLatest(actionTypes.UPDATE_USER_ACTION, updateUser),
    yield takeLatest(actionTypes.UPDATE_USER_AVATAR_ACTION, updateUserAvatar),
  ]);
}
