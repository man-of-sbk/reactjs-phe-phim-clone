/* eslint-disable react/no-array-index-key */
/**
 *
 * ProfilePage
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { makeSelectApp } from 'containers/App/selectors';

import Divider from 'antd/lib/divider';
import Upload from 'antd/lib/upload';
import message from 'antd/lib/message';

import Avatar from 'images/avatar.png';

import Button from 'components/Button/index';
import EditDrawer from './components/EditDrawer';
import Wrapper from './styledComponents/Wrapper';

import makeSelectProfilePage from './selectors';
import reducer from './reducer';
import saga from './saga';

import * as actions from './actions';

const usersInfoKeyMapper = [
  {
    key: 'email',
    label: 'Email',
  },
  {
    key: 'address',
    label: 'Địa chỉ',
  },
  {
    key: 'phone_number',
    label: 'Sđt',
  },
  {
    key: 'visa_number',
    label: 'Số Visa',
  },
];

export function ProfilePage({
  app,
  history,
  dispatchUpdateUser,
  profilePage,
  dispatchUpdateUserAvatar,
  dispatchResetUpdateStatus,
}) {
  useInjectReducer({ key: 'profilePage', reducer });
  useInjectSaga({ key: 'profilePage', saga });

  const [openDrawer, setOpenDrawer] = useState(false);
  const { user, ableToAccessPageNeedingUser } = app;

  useEffect(() => {
    if (profilePage.updateUserAvatarFailed) {
      message.error(`There's something went wrong with our server !`);
      dispatchResetUpdateStatus();
    }

    if (profilePage.updateUserSuccess) {
      message.success(`Thông tin của bạn đã được Update thành công !`);
      dispatchResetUpdateStatus();
    }
  }, [profilePage.updateUserAvatarFailed, profilePage.updateUserSuccess]);

  useEffect(() => {
    if (!ableToAccessPageNeedingUser)
      history.replace({
        pathname: '/login',
        state: { requestFromProfile: true },
      });
  }, [ableToAccessPageNeedingUser]);

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleEditFormSubmit = inputValues => {
    dispatchUpdateUser(inputValues);
  };

  const uploadProps = {
    customRequest({ file }) {
      const formData = new FormData();

      Object.keys(user).forEach(userInfoKey => {
        formData.append(userInfoKey, user[userInfoKey]);
      });

      formData.append('string', 'delete');
      formData.append('avatar', file);

      dispatchUpdateUserAvatar(formData);
    },
  };

  return (
    <Wrapper>
      <Helmet>
        <title>ProfilePage</title>
        <meta name="description" content="Description of ProfilePage" />
      </Helmet>
      <EditDrawer
        className="edit-profile-drawer"
        visible={openDrawer}
        onClose={handleCloseDrawer}
        onSubmit={handleEditFormSubmit}
        errorsFromServer={profilePage.errors}
        userInfo={user}
      />
      {user && (
        <div className="user-info-container">
          <div className="user-avatar-container">
            <img
              className="user-avatar"
              src={user.avatar ? `http://18.139.163.192${user.avatar}` : Avatar}
              alt="user avatar"
              width="100%"
            />
            <Upload className="upload-btn" {...uploadProps}>
              <Button bordered iconType="upload">
                Upload
              </Button>
            </Upload>
          </div>
          <div className="user-info">
            <div className="user-info-header">
              <h2 className="user-name">{user.name}</h2>
              <Button
                className="edit-btn"
                bordered
                iconType="edit"
                onClick={handleOpenDrawer}
              >
                Chỉnh sửa
              </Button>
            </div>
            <Divider />
            {usersInfoKeyMapper.map((infoKey, index) => (
              <div className="user-info-block" key={index}>
                <span className="user-infor-key">{infoKey.label}:</span>{' '}
                {user[infoKey.key] || '(trống)'}
              </div>
            ))}
          </div>
        </div>
      )}
    </Wrapper>
  );
}

ProfilePage.propTypes = {
  dispatchUpdateUser: PropTypes.func.isRequired,
  dispatchUpdateUserAvatar: PropTypes.func.isRequired,
  app: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  profilePage: PropTypes.object.isRequired,
  dispatchResetUpdateStatus: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profilePage: makeSelectProfilePage(),
  app: makeSelectApp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchUpdateUser: payloads =>
      dispatch(actions.updateUserAction(payloads)),
    dispatchUpdateUserAvatar: payloads =>
      dispatch(actions.updateUserAvatarAction(payloads)),
    dispatchResetUpdateStatus: () =>
      dispatch(actions.resetUpdateStatusAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProfilePage);
