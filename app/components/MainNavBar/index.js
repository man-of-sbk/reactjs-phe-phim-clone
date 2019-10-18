/**
 *
 * MainNavBar
 *
 */

import React from 'react';

import Logo from 'images/logo.png';

import LeftNavBar from './components/LeftNavBar/index';
import RightNavBar from './components/RightNavBar/index';
import HamburgerBtn from './components/HamburgerBtn/index';
import Wrapper from './styledComponents/Wrapper';
import LogoContainer from './styledComponents/LogoContainer';
import MenusContainer from './styledComponents/MenusContainer';

function MainNavBar() {
  return (
    <Wrapper>
      <LogoContainer>
        <img src={Logo} alt="Phe phim logo" width="auto" height="100%" />
      </LogoContainer>
      <MenusContainer className="navbars-container">
        <LeftNavBar />
        <RightNavBar />
      </MenusContainer>
      <HamburgerBtn />
    </Wrapper>
  );
}

MainNavBar.propTypes = {};

export default MainNavBar;
