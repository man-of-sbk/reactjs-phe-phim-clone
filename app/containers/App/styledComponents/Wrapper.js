/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { dark, lightOnDark } from 'cssVariable';
// import * as breakpoints from 'breakpoints';

const Wrapper = styled.div`
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

  .ant-layout-content,
  .ant-layout-footer {
    background: ${lightOnDark};
  }
`;

export default Wrapper;
