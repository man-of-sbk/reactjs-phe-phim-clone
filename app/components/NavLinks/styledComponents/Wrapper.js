/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { Menu } from 'antd';
import * as breakpoints from 'breakpoints';

const Wrapper = styled(Menu)`
  align-items: center;

  .right-links-container {
    display: flex;
    margin-left: auto;

    > * {
      margin-left: 10px;
    }
  }

  @media (max-width: ${breakpoints.xs}) {
    display: none !important;
  }
`;

export default Wrapper;
