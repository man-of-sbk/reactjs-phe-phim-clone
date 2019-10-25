/**
 *
 * CustomButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'antd/lib/icon';

import StyledButton from './styledComponents/Button';

function Button({ children, color, iconType, borderColor, bordered, ...rest }) {
  return (
    <StyledButton
      ghost
      {...rest}
      color={color}
      borderColor={borderColor}
      bordered={bordered ? 1 : 0}
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
  bordered: PropTypes.bool,
};

Button.propTypes = {};

export default Button;
