/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import SmMovieList from 'components/SmMovieList/index';
import LgMovieList from 'components/LgMovieList/index';

import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';

export function HomePage({ app }) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <div className="container">
        <LgMovieList title="Đang Hot" movies={app.hotMovies} />
        <SmMovieList title="Sắp Chiếu" movies={app.latestMovies} />
      </div>
    </>
  );
}

HomePage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  app: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: selectors.makeSelectHomePage(),
  app: selectors.makeSelectApp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
