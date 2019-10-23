/**
 *
 * MainNavbar
 *
 */

import React, { useState } from 'react';

import NavLinks from 'components/NavLinks/index';
import NavbarHamburger from 'components/NavbarHamburger/index';
import Logo from 'components/Logo/index';
import NavbarDrawer from 'components/NavbarDrawer/index';

import Wrapper from './styledComponents/Wrapper';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function MainNavbar() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const onOpenDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <Wrapper className="clearfix">
      <div className="container h-100">
        <Logo />
        <NavLinks className="float-left" mode="horizontal" />
        <NavbarHamburger onClick={onOpenDrawer} />
        <NavbarDrawer visible={drawerVisible} onClose={onOpenDrawer} />
      </div>
    </Wrapper>
  );
}

MainNavbar.propTypes = {};

export default MainNavbar;
