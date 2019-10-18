/**
 *
 * CustomButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Icon } from 'antd';

const StyledButton = styled(Button)`
  border-color: ${props => props.color};
  color: ${props => props.color};
  display: flex;
  align-items: center;

  .anticon {
    margin-right: 10px;
  }

  a {
    color: ${props => props.color};
  }
`;

function CustomButton({ children, color, iconType, className }) {
  return (
    <StyledButton ghost color={color} className={className}>
      {iconType !== undefined && <Icon type={iconType} />}
      {children}
    </StyledButton>
  );
}

CustomButton.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  iconType: PropTypes.string,
};

CustomButton.propTypes = {};

export default CustomButton;
