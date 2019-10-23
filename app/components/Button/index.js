/**
 *
 * CustomButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

import StyledButton from './styledComponents/Button';

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
