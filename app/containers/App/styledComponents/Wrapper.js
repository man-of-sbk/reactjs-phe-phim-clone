/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { Layout } from 'antd';
import { dark } from 'cssVariable';
// import * as breakpoints from 'breakpoints';

const Wrapper = styled(Layout)`
  .ant-layout-header {
    padding: 0;
  }

  .ant-layout-header,
  .ant-menu-root {
    background: ${dark};
  }
`;

export default Wrapper;
