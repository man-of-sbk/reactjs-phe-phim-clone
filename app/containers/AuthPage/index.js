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

import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Wrapper from './styledComponents/Wrapper';
import FormContainer from './components/FormContainer/index';

import makeSelectAuthPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import * as actions from './actions';

export function AuthPage() {
  useInjectReducer({ key: 'authPage', reducer });
  useInjectSaga({ key: 'authPage', saga });

  return (
    <Wrapper>
      <FormContainer>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
        </Switch>
      </FormContainer>
    </Wrapper>
  );
}

AuthPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  authPage: makeSelectAuthPage(),
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

export default compose(withConnect)(AuthPage);
