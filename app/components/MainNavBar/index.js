/**
 *
 * MainNavbar
 *
 */

import React from 'react';

import NavLinks from 'components/NavLinks/index';
import NavbarHamburger from 'components/NavbarHamburger/index';
import Logo from 'components/Logo/index';
import NavbarDrawer from 'components/NavbarDrawer/index';

import Wrapper from './styledComponents/Wrapper';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function MainNavbar() {
  return (
    <Wrapper className="clearfix">
      <Logo />
      <NavLinks className="float-left" mode="horizontal" />
      <NavbarHamburger />
      <NavbarDrawer />
    </Wrapper>
  );
}

MainNavbar.propTypes = {};

export default MainNavbar;
