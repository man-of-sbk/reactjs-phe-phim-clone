/**
 *
 * CustomButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'antd/lib/icon';

import Wrapper from './styledComponents/Wrapper';

function Button({ children, color, iconType, borderColor, bordered, ...rest }) {
  return (
    <Wrapper
      ghost
      {...rest}
      color={color}
      borderColor={borderColor}
      bordered={bordered ? 1 : 0}
    >
      {iconType !== undefined && <Icon type={iconType} />}
      {children}
    </Wrapper>
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
