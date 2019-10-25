/**
 *
 * CustomInput
 *
 */

import styled from 'styled-components';
import AntInput from 'antd/lib/input';

import { darkGrey, secondary } from 'cssVariable';
// import React from 'react';
// import PropTypes from 'prop-types';

const Input = styled(AntInput)`
  color: ${secondary};
  background-color: #242d35!important;
  border-color: ${darkGrey};
  /* border: ${props => (props.bordered ? `1px solid #456` : `0`)}; */
  /* width: ${props => props.width}; */

  &::placeholder {
    color: ${secondary};
    opacity: 1;
  }

  /* in case this is treated with prefix property */
  .ant-input {
    color: ${secondary};
    background-color: #242d35!important;
    border-color: ${darkGrey};
  }

  .ant-input-prefix {
    color: ${secondary};
  }
`;

export default Input;
