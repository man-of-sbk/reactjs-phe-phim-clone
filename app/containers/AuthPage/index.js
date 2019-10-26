/**
 *
 * AuthPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { makeSelectApp } from 'containers/App/selectors';

import Spin from 'antd/lib/spin';

import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Wrapper from './styledComponents/Wrapper';
import FormContainer from './components/FormContainer/index';

import reducer from './reducer';
import saga from './saga';

import * as selectors from './selectors';
import * as actions from './actions';

export function AuthPage({
  history,
  dispatchLogIn,
  dispatchSignUp,
  authPage,
  app,
  dispatchResetSubmitSuccess,
}) {
  useInjectReducer({ key: 'authPage', reducer });
  useInjectSaga({ key: 'authPage', saga });

  if (app.user) history.replace('/');

  return (
    <Spin spinning={authPage.isSubmitting}>
      <Wrapper>
        <FormContainer>
          <Switch>
            <Route
              path="/login"
              render={props => (
                <LoginForm
                  {...props}
                  onSubmit={dispatchLogIn}
                  submitInfo={authPage}
                  resetSubmitSuccess={dispatchResetSubmitSuccess}
                />
              )}
            />
            <Route
              path="/signup"
              render={props => (
                <SignUpForm
                  {...props}
                  onSubmit={dispatchSignUp}
                  submitInfo={authPage}
                />
              )}
            />
          </Switch>
        </FormContainer>
      </Wrapper>
    </Spin>
  );
}

AuthPage.propTypes = {
  history: PropTypes.object.isRequired,
  dispatchLogIn: PropTypes.func.isRequired,
  dispatchSignUp: PropTypes.func.isRequired,
  authPage: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired,
  dispatchResetSubmitSuccess: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  authPage: selectors.makeSelectAuthPage(),
  app: makeSelectApp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchLogIn: payloads => dispatch(actions.logInAction(payloads)),
    dispatchSignUp: payloads => dispatch(actions.signUpAction(payloads)),
    dispatchResetSubmitSuccess: () =>
      dispatch(actions.resetSubmitSuccessAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AuthPage);
