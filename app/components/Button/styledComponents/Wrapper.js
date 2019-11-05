/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import Button from 'antd/lib/button';

// *** prevent styled-component pass props to generated DOM ele.
// ***** READ MORE: => https://stackoverflow.com/questions/49834251/how-to-extend-styled-component-without-passing-props-to-underlying-dom-element
const Wrapper = styled(({ borderColor, color, bordered, ...rest }) => (
  <Button {...rest} />
))`
  border-color: ${props => props.borderColor};
  color: ${props => props.color};
  border-width: ${props => (props.bordered === 1 ? `1px` : `0`)};
  display: flex;
  align-items: center;
  cursor: pointer;

  .anticon {
    margin-right: 10px;
  }

  a {
    color: ${props => props.color}!important;
    cursor: pointer;
  }
`;

export default Wrapper;
