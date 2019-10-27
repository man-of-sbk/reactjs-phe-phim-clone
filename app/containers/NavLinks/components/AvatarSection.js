/* eslint-disable prettier/prettier */
import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

import Dropdown from 'antd/lib/dropdown';
import Avatar from 'antd/lib/avatar';
import Icon from 'antd/lib/icon';
import Menu from 'antd/lib/menu';

import AvatarImg from 'images/avatar.png';

const AvatarSection = ({ onSignOut }) => {
  const dropdown = (
    <Menu id="avatar-dropdown">
      <Menu.Item key="0">
        <Link to="/">Trang cá nhân</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/" onClick={onSignOut}>
          Đăng xuất
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={dropdown} trigger={['click']}>
      {/* only an ele is able to enable dropdown */}
      <span>
        <Avatar src={AvatarImg} />
        <span className="avatar-name">
          HunqVux99 <Icon type="caret-down" />
        </span>
      </span>
    </Dropdown>
  );
};

AvatarSection.propTypes = {
  onSignOut: Proptypes.func.isRequired,
};

export default AvatarSection;
