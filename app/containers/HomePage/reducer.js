/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import * as actionTypes from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case actionTypes.DEFAULT_ACTION:
        break;
    }
  });

export default homePageReducer;
