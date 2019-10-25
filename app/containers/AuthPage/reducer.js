/*
 *
 * AuthPage reducer
 *
 */
import produce from 'immer';
import * as actionTypes from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const authPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case actionTypes.LOGIN_IN_ACTION:
        break;
    }
  });

export default authPageReducer;
