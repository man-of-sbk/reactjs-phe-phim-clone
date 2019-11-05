/**
 *
 * Asynchronously loads the component for MoviesPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
