/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'antd/lib/icon';
import { NavLink } from 'react-router-dom';

import SearchInput from 'components/SearchInput/index';

function SearchBar() {
  return (
    <>
      <SearchInput className="search-input" placeholder="Phim" />
      <NavLink className="search-navlink" to="/">
        <Icon type="search" />
      </NavLink>
    </>
  );
}

export default SearchBar;
