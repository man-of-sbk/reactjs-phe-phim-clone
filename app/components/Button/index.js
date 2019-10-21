/**
 *
 * CustomButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button as AntButton, Icon } from 'antd';

const StyledButton = styled(AntButton)`
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

function Button({ children, color, iconType, className, borderColor }) {
  return (
    <StyledButton
      ghost
      color={color}
      borderColor={borderColor}
      className={className}
    >
      {iconType !== undefined && <Icon type={iconType} />}
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  iconType: PropTypes.string,
  className: PropTypes.string,
};

Button.propTypes = {};

export default Button;
