/**
 *
 * LeftNavBar
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import CustomInput from 'commons/CustomInput/index';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const navLinks = [
  {
    key: `home`,
    to: `/`,
    content: `Phê Phim`,
  },
  {
    key: `club`,
    to: `/`,
    content: `Phê Club`,
  },
  {
    key: `movies`,
    to: `/`,
    content: `Phim`,
  },
  {
    key: `administration`,
    to: `/`,
    content: `Quản trị`,
  },
];

function LeftNavBar() {
  return (
    <Menu mode="horizontal" className="d-flex align-items-center">
      {navLinks.map(link => (
        <Menu.Item key={link.key}>
          <NavLink to={link.to}>{link.content}</NavLink>
        </Menu.Item>
      ))}
      <Menu.Item key="searchInput">
        <CustomInput
          className="rounded-pill main-navbar-searchbar"
          placeholder="Phim, bài viết"
          width="200px"
          search
        />
      </Menu.Item>
    </Menu>
  );
}

LeftNavBar.propTypes = {};

export default LeftNavBar;
