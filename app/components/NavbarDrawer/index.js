/**
 *
 * NavbarDrawer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import NavLinks from 'components/NavLinks/index';
import Wrapper from './styledComponents/Wrapper';
// import RightNavbar from 'components/RightNavbar/index';
// import styled from 'styled-components';

function NavbarDrawer({ onClose }) {
  return (
    <Wrapper
      width={340}
      title="Basic Drawer"
      placement="right"
      closable
      visible
      onClose={onClose}
    >
      <NavLinks mode="vertical" />
      {/* <RightNavbar /> */}
    </Wrapper>
  );
}

NavbarDrawer.propTypes = {
  onClose: PropTypes.func,
};

export default NavbarDrawer;
