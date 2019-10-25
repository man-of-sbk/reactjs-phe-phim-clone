/**
 *
 * CustomInput
 *
 */

import styled from 'styled-components';
import AntInput from 'antd/lib/input';

import { darkGrey, secondary } from 'cssVariable';

const PasswordInput = styled(AntInput.Password)`
  .ant-input {
    color: ${secondary};
    background-color: #242d35 !important;
    border-color: ${darkGrey};
  }

  .ant-input-prefix {
    color: ${secondary};
  }

  .ant-input-password-icon {
    color: ${secondary};
  }
`;

export default PasswordInput;
