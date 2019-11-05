/**
 *
 * NavbarHamburger
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styledComponents/Wrapper';

function NavbarHamburger({ onClick }) {
  return <Wrapper iconType="menu" onClick={onClick} />;
}

NavbarHamburger.propTypes = {
  onClick: PropTypes.func,
};

export default NavbarHamburger;
