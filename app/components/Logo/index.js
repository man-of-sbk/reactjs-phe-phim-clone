/**
 *
 * Logo
 *
 */

import React from 'react';

import LogoImage from 'images/logo.png';

import Wrapper from './styledComponents/Wrapper';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Logo() {
  return (
    <Wrapper to="/">
      <img src={LogoImage} alt="logo" />
    </Wrapper>
  );
}

Logo.propTypes = {};

export default Logo;
