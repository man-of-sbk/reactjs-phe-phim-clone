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

function Button({
  children,
  color,
  iconType,
  className,
  borderColor,
  onClick,
}) {
  return (
    <StyledButton
      className={className}
      ghost
      color={color}
      borderColor={borderColor}
      onClick={onClick}
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
  borderColor: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.propTypes = {};

export default Button;
