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

import { makeSelectApp as app } from 'containers/App/selectors';

import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Wrapper from './styledComponents/Wrapper';
import FormContainer from './components/FormContainer/index';

import makeSelectAuthPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import * as actions from './actions';

export function AuthPage({ history, dispatchLogIn, dispatchSignUp, authPage }) {
  useInjectReducer({ key: 'authPage', reducer });
  useInjectSaga({ key: 'authPage', saga });

  if (app.user) {
    history.replace('/');
  }
  // console.log(authPage.errors);
  return (
    <Wrapper>
      <FormContainer>
        <Switch>
          <Route
            path="/login"
            render={props => <LoginForm {...props} onSubmit={dispatchLogIn} />}
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
  );
}

AuthPage.propTypes = {
  history: PropTypes.object.isRequired,
  dispatchLogIn: PropTypes.func.isRequired,
  dispatchSignUp: PropTypes.func.isRequired,
  authPage: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  authPage: makeSelectAuthPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchLogIn: payloads => dispatch(actions.logInAction(payloads)),
    dispatchSignUp: payloads => dispatch(actions.signUpAction(payloads)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AuthPage);
