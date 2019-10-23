/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { Layout } from 'antd';
import { dark, lightOnDark } from 'cssVariable';
// import * as breakpoints from 'breakpoints';

const Wrapper = styled(Layout)`
  .ant-layout-header {
    padding: 0;
    /* position: fixed;
    top: 0;
    left: 0; */
  }

  .ant-layout-header,
  .ant-menu-root {
    background: ${dark};
  }

  .ant-layout-content {
    background: ${lightOnDark};
  }
`;

export default Wrapper;
