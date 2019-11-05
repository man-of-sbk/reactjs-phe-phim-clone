/*
 *
 * ProfilePage actions
 *
 */

import * as actionTypes from './constants';

export function defaultAction() {
  return {
    type: actionTypes.DEFAULT_ACTION,
  };
}

export function updateUserAction(payloads) {
  return {
    type: actionTypes.UPDATE_USER_ACTION,
    payloads,
  };
}

export function updateUserSuccessAction() {
  return {
    type: actionTypes.UPDATE_USER_SUCCESS_ACTION,
  };
}

export function updateUserFailedAction(payloads) {
  return {
    type: actionTypes.UPDATE_USER_FAILED_ACTION,
    payloads,
  };
}

export function updateUserAvatarAction(payloads) {
  return {
    type: actionTypes.UPDATE_USER_AVATAR_ACTION,
    payloads,
  };
}

export function updateUserAvatarSuccessAction() {
  return {
    type: actionTypes.UPDATE_USER_AVATAR_SUCCESS_ACTION,
  };
}

export function updateUserAvatarFailedAction(payloads) {
  return {
    type: actionTypes.UPDATE_USER_AVATAR_FAILED_ACTION,
    payloads,
  };
}

export function resetUpdateStatusAction() {
  return {
    type: actionTypes.RESET_UPDATE_STATUS_ACTION,
  };
}
