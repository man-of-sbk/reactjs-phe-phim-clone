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

import LoadingPage from 'containers/LoadingPage/index';
import MoviesPage from 'containers/MoviesPage/index';
import ProfilePage from 'containers/ProfilePage/index';
import MovieInfoPage from 'containers/MovieInfoPage/index';
import Wrapper from './styledComponents/Wrapper';

import reducer from './reducer';
import saga from './saga';

import * as selectors from './selectors';
import * as actions from './actions';

export function App({
  dispatchFetchMovies,
  location,
  app,
  dispatchAuthorizeUser,
  dispatchSignOut,
}) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  useEffect(() => {
    dispatchFetchMovies();
    dispatchAuthorizeUser();
  }, []);

  const isInPageWithFullLayout =
    location.pathname !== '/login' && location.pathname !== '/signup';

  if (app.isAuthorizingUser) {
    return <LoadingPage />;
  }

  return (
    <>
      <Wrapper id="top-nav-bar">
        {isInPageWithFullLayout && (
          <Layout.Header>
            <MainNavbar user={app.user} onSignOut={dispatchSignOut} />
          </Layout.Header>
        )}
        <Layout.Content>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={AuthPage} />
            <Route path="/signup" component={AuthPage} />
            <Route path="/movies" component={MoviesPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/movie/:id" component={MovieInfoPage} />
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
  app: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  dispatchAuthorizeUser: PropTypes.func.isRequired,
  dispatchSignOut: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  app: selectors.makeSelectApp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchMovies: () => dispatch(actions.fetchMoviesAction()),
    dispatchAuthorizeUser: () => dispatch(actions.authorizeUserAction()),
    dispatchSignOut: () => dispatch(actions.signOutAction()),
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
