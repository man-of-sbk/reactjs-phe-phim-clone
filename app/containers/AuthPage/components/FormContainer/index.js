/**
 *
 * FormContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Login from 'images/logo.png';
import Div from './styledComponents/Div';
// import styled from 'styled-components';

function FormContainer({ children }) {
  return (
    <Div>
      <img className="logo" src={Login} alt="phe phim logo" />
      {children}
    </Div>
  );
}

FormContainer.propTypes = {
  children: PropTypes.node,
};

export default FormContainer;
