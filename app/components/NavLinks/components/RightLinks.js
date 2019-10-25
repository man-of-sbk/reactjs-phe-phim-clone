/* eslint-disable prettier/prettier */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { primary, darkGrey, secondary } from 'cssVariable';

import Button from 'components/Button/index';

function RightLinks() {
  return (
    <>
      <Button
        className="write-post-btn"
        borderColor={primary}
        color={primary}
        iconType="form"
        bordered
      >
        <NavLink to="/">Viết bài</NavLink>
      </Button>

      <Button borderColor={darkGrey} color={secondary} bordered>
        <NavLink to="/login">Đăng nhập</NavLink>
      </Button>
    </>
  );
}

export default RightLinks;
