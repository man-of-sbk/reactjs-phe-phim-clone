/**
 *
 * CustomInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from 'antd';

const NormalInput = styled(Input)`
  color: #bcd;
  background: #242d35;
  border: ${props => (props.bordered ? `1px solid #456` : `0`)};
  width: ${props => props.width};

  &::placeholder {
    color: #bcd;
    opacity: 1;
  }
`;

const SearchInput = styled(Input.Search)`
  input {
    color: #bcd;
    background: #242d35;
    border: ${props => (props.bordered ? `1px solid #456` : `0`)};
    width: ${props => props.width};
    border-radius: 50px;

    &::placeholder {
      color: #bcd;
      opacity: 1;
    }
  }

  .anticon-search {
    color: #bcd;
    margin: 0;
  }
`;

function CustomInput({ search, ...rest }) {
  return search ? <SearchInput {...rest} /> : <NormalInput {...rest} />;
}

CustomInput.propTypes = {
  search: PropTypes.bool,
};

export default CustomInput;
