import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the moviesPage state domain
 */

const selectMoviesPageDomain = state => state.moviesPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MoviesPage
 */

const makeSelectMoviesPage = () =>
  createSelector(
    selectMoviesPageDomain,
    substate => substate,
  );

export default makeSelectMoviesPage;
export { selectMoviesPageDomain };
