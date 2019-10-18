/* eslint-disable prettier/prettier */
/**
 *
 * CustomButton
 *
 */

import styled from 'styled-components';
import { Dropdown } from 'antd';

const AvatarContainer = styled(Dropdown)`
  display: flex;
  align-items: center;

  .ant-avatar {
    margin-right: 10px;
    display: flex;
    align-items: center;
  }
`;

export default AvatarContainer;
