/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { dark, lightOnDark } from 'cssVariable';
// import * as breakpoints from 'breakpoints';

const Div = styled.div`
  .ant-layout-header {
    padding: 0;
  }

  .ant-layout-header,
  .ant-menu-root {
    background: ${dark};
  }

  .ant-layout-content,
  .ant-layout-footer {
    background: ${lightOnDark};
  }

  .ant-layout-footer {
    padding-left: 0;
    padding-right: 0;
  }
`;

export default Div;
