/* eslint-disable prettier/prettier */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { primary, darkGrey, secondary } from 'cssVariable';

import { makeSelectApp as app } from 'containers/App/selectors';

import Button from 'components/Button/index';
import AvatarSection from './components/AvatarSection/index';

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

      {app.user ? (
        <AvatarSection />
      ) : (
        <Button borderColor={darkGrey} color={secondary} bordered>
          <NavLink to="/login">Đăng nhập</NavLink>
        </Button>
      )}

      {/* <AvatarSection /> */}
    </>
  );
}

export default RightLinks;
