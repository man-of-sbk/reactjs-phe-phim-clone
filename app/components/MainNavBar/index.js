/**
 *
 * MainNavbar
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import NavLinks from 'components/NavLinks/index';
import NavbarHamburger from 'components/NavbarHamburger/index';
import Logo from 'components/Logo/index';
import NavbarDrawer from 'components/NavbarDrawer/index';

import Wrapper from './styledComponents/Wrapper';
// import styled from 'styled-components';

function MainNavbar({ user, onSignOut }) {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const onOpenDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <Wrapper className="clearfix">
      <div className="container h-100">
        <Logo />
        <NavLinks
          className="float-left"
          mode="horizontal"
          user={user}
          onSignOut={onSignOut}
        />
        <NavbarHamburger onClick={onOpenDrawer} />
        <NavbarDrawer
          visible={drawerVisible}
          onClose={onOpenDrawer}
          user={user}
          onSignOut={onSignOut}
        />
      </div>
    </Wrapper>
  );
}

MainNavbar.propTypes = {
  user: PropTypes.object,
  onSignOut: PropTypes.func.isRequired,
};

export default MainNavbar;
