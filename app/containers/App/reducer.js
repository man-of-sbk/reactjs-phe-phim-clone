/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import * as actionTypes from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case actionTypes.FETCH_MOVIES_ACTION:
        break;
    }
  });

export default appReducer;
