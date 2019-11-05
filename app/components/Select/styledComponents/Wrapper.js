/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import Select from 'antd/lib/select';

import { darkGrey3, darkGrey, secondary } from 'cssVariable';

// import PropTypes from 'prop-types';

const Wrapper = styled(Select)`
  .ant-select-selection {
    width: ${props => props.width};

    background: ${darkGrey3};
    border-color: ${darkGrey};
    color: ${secondary};

    .anticon {
      color: ${secondary};
    }
  }
`;

export default Wrapper;
