import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the authPage state domain
 */

const selectAuthPageDomain = state => state.authPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AuthPage
 */

const makeSelectAuthPage = () =>
  createSelector(
    selectAuthPageDomain,
    substate => substate,
  );

export default makeSelectAuthPage;
export { selectAuthPageDomain };
