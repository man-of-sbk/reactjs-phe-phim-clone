/**
 *
 * MovieListContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';

import Wrapper from './styledComponents/Wrapper';
// import styled from 'styled-components';

function MovieListContainer({ title, children, className }) {
  return (
    <Wrapper className={className}>
      <h2>{title}</h2>
      <Divider type="horizontal" />
      {children}
    </Wrapper>
  );
}

MovieListContainer.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default MovieListContainer;
