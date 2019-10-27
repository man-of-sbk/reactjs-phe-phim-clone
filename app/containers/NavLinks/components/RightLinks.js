/* eslint-disable prettier/prettier */
import React from 'react';
import Proptypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { primary, darkGrey, secondary } from 'cssVariable';

// import { makeSelectApp as app } from 'containers/App/selectors';

import Button from 'components/Button/index';
import AvatarSection from './AvatarSection';

function RightLinks({ user, onSignOut }) {
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

      {user ? (
        <AvatarSection onSignOut={onSignOut} />
      ) : (
        <Button borderColor={darkGrey} color={secondary} bordered>
          <NavLink to="/login">Đăng nhập</NavLink>
        </Button>
      )}
    </>
  );
}

RightLinks.propTypes = {
  user: Proptypes.object,
  onSignOut: Proptypes.func.isRequired,
};

export default RightLinks;
