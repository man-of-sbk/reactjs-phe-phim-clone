/**
 *
 * FormContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Login from 'images/logo.png';
import Wrapper from './styledComponents/Wrapper';
// import styled from 'styled-components';

function FormContainer({ children }) {
  return (
    <Wrapper>
      <img className="logo" src={Login} alt="phe phim logo" />
      {children}
    </Wrapper>
  );
}

FormContainer.propTypes = {
  children: PropTypes.node,
};

export default FormContainer;
