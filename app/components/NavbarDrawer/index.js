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

function NavbarDrawer({ onClose, visible, user, onSignOut }) {
  return (
    <Wrapper
      width={340}
      title="Basic Drawer"
      placement="right"
      closable
      visible={visible}
      onClose={onClose}
    >
      <NavLinks mode="vertical" user={user} onSignOut={onSignOut} />
    </Wrapper>
  );
}

NavbarDrawer.propTypes = {
  onClose: PropTypes.func,
  visible: PropTypes.bool,
  user: PropTypes.object,
  onSignOut: PropTypes.func.isRequired,
};

export default NavbarDrawer;
