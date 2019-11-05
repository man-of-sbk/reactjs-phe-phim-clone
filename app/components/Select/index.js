/**
 *
 * Select
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styledComponents/Wrapper';
// import styled from 'styled-components';

const { Option } = Wrapper;

const Select = React.forwardRef(({ options, ...rest }, ref) => {
  return (
    <Wrapper {...rest} ref={ref}>
      {options.map(option => (
        <Option key={option.value} value={option.value}>
          {option.content}
        </Option>
      ))}
    </Wrapper>
  );
});

Select.propTypes = {
  options: PropTypes.array,
};

export default Select;
