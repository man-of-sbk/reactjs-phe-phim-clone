import { createSelector } from 'reselect';
import { initialState as appInitState } from 'containers/App/reducer';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.homePage || initialState;
const selectAppDomain = state => state.app || appInitState;
/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate,
  );

const makeSelectApp = () =>
  createSelector(
    selectAppDomain,
    subState => subState,
  );

export { makeSelectHomePage, makeSelectApp };
