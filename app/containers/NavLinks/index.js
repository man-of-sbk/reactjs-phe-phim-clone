/* eslint-disable react/no-array-index-key */
/**
 *
 * NavLinks
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectApp } from 'containers/App/selectors';
import { signOutAction } from 'containers/App/actions';

import { NavLink } from 'react-router-dom';
import Menu from 'antd/lib/menu';
import StyledMenu from './styledComponents/StyledMenu';
// import SearchBar from './components/SearchBar';
import RightLinks from './components/RightLinks';

import { links } from './config';

export function NavLinks({ mode, app, dispatchSignOut }) {
  return (
    <StyledMenu className={mode === `horizontal` && `d-flex-ni`} mode={mode}>
      {links.map((link, index) => (
        <Menu.Item key={index}>
          <NavLink to={link.to}>{link.content}</NavLink>
        </Menu.Item>
      ))}

      {/* <Menu.Item className="search-navlink-container">
        <SearchBar />
      </Menu.Item> */}

      <Menu.Item className="right-links-container">
        <RightLinks user={app.user} onSignOut={dispatchSignOut} />
      </Menu.Item>
    </StyledMenu>
  );
}

NavLinks.propTypes = {
  mode: PropTypes.string.isRequired,
  app: PropTypes.object,
  dispatchSignOut: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchSignOut: () => dispatch(signOutAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(NavLinks);
