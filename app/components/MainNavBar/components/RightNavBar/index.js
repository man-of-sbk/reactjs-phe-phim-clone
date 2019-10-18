/**
 *
 * RightNavBar
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Avatar, Icon } from 'antd';

import CustomButton from 'commons/CustomButton/index';
import CustomIcon from './styledComponents/CustomIcon';
import Wrapper from './styledComponents/Wrapper';
import UserName from './styledComponents/UserName';
import AvatarContainer from './styledComponents/AvatarContainer';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';
const notificationMenu = dataToDisplay => (
  <Menu>
    {dataToDisplay ? (
      dataToDisplay.map(data => (
        <Menu.Item>
          <a href="/">{data.content}</a>
        </Menu.Item>
      ))
    ) : (
      <Menu.Item>
        <a href="/">Bạn không có thông báo nào</a>
      </Menu.Item>
    )}
  </Menu>
);

function RightNavBar() {
  return (
    <Wrapper>
      <CustomButton
        className="navbar-post-btn"
        ghost
        color="#64bde3"
        iconType="form"
      >
        <Link to="/">Viết bài</Link>
      </CustomButton>

      <Dropdown overlay={notificationMenu()}>
        <CustomIcon type="bell" />
      </Dropdown>

      <AvatarContainer overlay={notificationMenu()}>
        <span>
          <Avatar>Hunq vux</Avatar>
          <UserName className="text-white navbar-avatar-name">
            HunqVux99 <Icon type="caret-down" />
          </UserName>
        </span>
      </AvatarContainer>
    </Wrapper>
  );
}

RightNavBar.propTypes = {};

export default RightNavBar;
