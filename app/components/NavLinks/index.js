/* eslint-disable react/no-array-index-key */
/**
 *
 * LeftNavbar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import { primary, darkGrey, secondary } from 'cssVariable';

import Input from 'components/Input/index';
import Button from 'components/Button/index';

import Wrapper from './styledComponents/Wrapper';

// import styled from 'styled-components';
import { links } from './config';

function NavLinks({ mode }) {
  return (
    <Wrapper className={mode === `horizontal` && `d-flex-ni`} mode={mode}>
      {links.map((link, index) => (
        <Menu.Item key={index}>
          <NavLink to={link.to}>{link.content}</NavLink>
        </Menu.Item>
      ))}
      <Menu.Item className="search-navlink-container">
        <Input className="search-input" search />
        <NavLink className="search-navlink" to="/">
          <Icon type="search" />
        </NavLink>
      </Menu.Item>

      <Menu.Item className="right-links-container">
        <Button
          className="write-post-btn"
          borderColor={primary}
          color={primary}
          iconType="form"
        >
          <NavLink to="/">Viết bài</NavLink>
        </Button>

        <Button borderColor={darkGrey} color={secondary}>
          <NavLink to="/">Đăng nhập</NavLink>
        </Button>
      </Menu.Item>
    </Wrapper>
  );
}

NavLinks.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default NavLinks;
