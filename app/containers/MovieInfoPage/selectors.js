import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the movieInfoPage state domain
 */

const selectMovieInfoPageDomain = state => state.movieInfoPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MovieInfoPage
 */

const makeSelectMovieInfoPage = () =>
  createSelector(
    selectMovieInfoPageDomain,
    substate => substate,
  );

export default makeSelectMovieInfoPage;
export { selectMovieInfoPageDomain };
