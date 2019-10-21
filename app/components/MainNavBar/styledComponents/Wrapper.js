/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { dark, primary } from 'cssVariable';
import { Layout } from 'antd';

const Wrapper = styled(Layout.Header)`
  background: ${dark};

  > * {
    background: ${dark};
  }

  .ant-menu {
    border: 0;

    .ant-menu-item {
      border: 0;
      line-height: 64px;
      padding: 0 10px;

      a {
        color: white;
        font-size: 16px;

        :hover {
          color: ${primary};
        }
      }
    }
  }
`;

export default Wrapper;
