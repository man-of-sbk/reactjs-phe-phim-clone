/**
 *
 * App
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import Layout from 'antd/lib/layout';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AuthPage from 'containers/AuthPage/Loadable';

import MainNavbar from 'components/MainNavbar/index';
import Footer from 'components/Footer/index';

import GlobalStyle from 'global-styles';
import GlobalThemeStyles from 'global-theme-styles';

import Wrapper from './styledComponents/Wrapper';

import makeSelectApp from './selectors';
import reducer from './reducer';
import saga from './saga';

import * as actions from './actions';

export function App({ dispatchFetchMovies, location }) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  useEffect(() => {
    dispatchFetchMovies();
  }, []);

  const isInPageWithFullLayout =
    location.pathname !== '/login' && location.pathname !== '/signup';

  return (
    <>
      <Wrapper>
        {isInPageWithFullLayout && (
          <Layout.Header>
            <MainNavbar />
          </Layout.Header>
        )}
        <Layout.Content>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={AuthPage} />
            <Route path="/signup" component={AuthPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Layout.Content>
        {isInPageWithFullLayout && (
          <Layout.Footer>
            <Footer />
          </Layout.Footer>
        )}
      </Wrapper>
      <GlobalStyle />
      <GlobalThemeStyles />
    </>
  );
}

App.propTypes = {
  dispatchFetchMovies: PropTypes.func.isRequired,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchMovies: () => dispatch(actions.fetchMoviesAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withRouter,
)(App);
