/**
 *
 * App
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import MainNavbar from 'components/MainNavbar/index';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer/index';

import GlobalStyle from 'global-styles';
import GlobalThemeStyles from 'global-theme-styles';

import Wrapper from './styledComponents/Wrapper';

import makeSelectApp from './selectors';
import reducer from './reducer';
import saga from './saga';

export function App() {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  return (
    <>
      <Wrapper>
        <Layout.Header>
          <MainNavbar />
        </Layout.Header>
        <Layout.Content>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Layout.Content>
        <Footer />
      </Wrapper>
      <GlobalStyle />
      <GlobalThemeStyles />
    </>
  );
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
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

export default compose(withConnect)(App);
