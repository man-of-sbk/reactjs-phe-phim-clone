/* eslint-disable react/no-array-index-key */
/**
 *
 * LeftNavbar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

// import Input from 'components/Input/index';
// import Button from 'components/Button/index';
import SearchBar from './components/SearchBar/index';
import RightLinks from './components/RightLinks/index';

import Wrapper from './styledComponents/Wrapper';

// import styled from 'styled-components';
import { links } from './config';

function NavLinks({ mode, user, onSignOut }) {
  return (
    <Wrapper className={mode === `horizontal` && `d-flex-ni`} mode={mode}>
      {links.map((link, index) => (
        <Menu.Item key={index}>
          <NavLink to={link.to}>{link.content}</NavLink>
        </Menu.Item>
      ))}

      <Menu.Item className="search-navlink-container">
        <SearchBar />
      </Menu.Item>

      <Menu.Item className="right-links-container">
        <RightLinks user={user} onSignOut={onSignOut} />
      </Menu.Item>
    </Wrapper>
  );
}

NavLinks.propTypes = {
  mode: PropTypes.string.isRequired,
  user: PropTypes.object,
  onSignOut: PropTypes.func,
};

export default NavLinks;
