/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';

import { NavLink } from 'react-router-dom';

function SearchBar() {
  return (
    <>
      <Input
        className="search-input form-control border-radius-50"
        placeholder="Phim"
      />
      <NavLink className="search-navlink" to="/movies">
        <Icon type="search" />
      </NavLink>
    </>
  );
}

export default SearchBar;
