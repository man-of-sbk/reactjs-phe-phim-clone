/**
 *
 * CustomInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AntInput from 'antd/lib/input';

const NormalInput = styled(AntInput)`
  color: #bcd;
  background: #242d35;
  border: ${props => (props.bordered ? `1px solid #456` : `0`)};
  width: ${props => props.width};

  &::placeholder {
    color: #bcd;
    opacity: 1;
  }
`;

const SearchInput = styled(AntInput.Search)`
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

function Input({ search, ...rest }) {
  return search ? <SearchInput {...rest} /> : <NormalInput {...rest} />;
}

Input.propTypes = {
  search: PropTypes.bool,
};

export default Input;
