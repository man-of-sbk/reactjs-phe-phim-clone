/**
 *
 * LoadingPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

import LoadingIcon from 'images/loading-icon.gif';
import Wrapper from './styledComponents/Wrapper';

export function LoadingPage() {
  return (
    <>
      <Helmet>
        <title>LoadingPage</title>
        <meta name="description" content="Description of LoadingPage" />
      </Helmet>
      <Wrapper>
        <img src={LoadingIcon} alt="logo" />
      </Wrapper>
    </>
  );
}

LoadingPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(LoadingPage);
