/**
 *
 * InputIcon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
// import styled from 'styled-components';

// import Input from 'components/Input/index';

function InputIcon({ iconType, ...rest }) {
  return <Input prefix={<Icon type={iconType} />} {...rest} />;
}

InputIcon.propTypes = {
  iconType: PropTypes.string.isRequired,
};

export default InputIcon;
