/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import { Button as AntButton } from 'antd';

// *** prevent styled-component pass props to generated DOM ele.
// ***** READ MORE: => https://stackoverflow.com/questions/49834251/how-to-extend-styled-component-without-passing-props-to-underlying-dom-element
const Button = styled(({ borderColor, color, ...rest }) => (
  <AntButton {...rest} />
))`
  border-color: ${props => props.borderColor};
  color: ${props => props.color};
  display: flex;
  align-items: center;

  .anticon {
    margin-right: 10px;
  }

  a {
    color: ${props => props.color}!important;
  }
`;

export default Button;
