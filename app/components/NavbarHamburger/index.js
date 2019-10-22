/**
 *
 * NavbarHamburger
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Button from './styledComponents/Button';
// import styled from 'styled-components';

function NavbarHamburger({ onClick }) {
  return <Button iconType="menu" onClick={onClick} />;
}

NavbarHamburger.propTypes = {
  onClick: PropTypes.func,
};

export default NavbarHamburger;
