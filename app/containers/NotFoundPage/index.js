/**
 *
 * NotFoundPage
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

import Wrapper from './styledComponents/Wrapper';

import makeSelectNotFoundPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function NotFoundPage() {
  useInjectReducer({ key: 'notFoundPage', reducer });
  useInjectSaga({ key: 'notFoundPage', saga });

  return (
    <Wrapper>
      <Helmet>
        <title>NotFoundPage</title>
        <meta name="description" content="Description of NotFoundPage" />
      </Helmet>
      <main>
        <div className="status">404</div>
        <div className="message">Page Not Found</div>
      </main>
    </Wrapper>
  );
}

NotFoundPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  notFoundPage: makeSelectNotFoundPage(),
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

export default compose(withConnect)(NotFoundPage);
