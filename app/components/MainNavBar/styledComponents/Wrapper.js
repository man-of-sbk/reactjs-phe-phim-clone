/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { Layout } from 'antd';
import * as breakpoints from 'breakpoints';

const Wrapper = styled(Layout.Header)`
  background: #14181c;
  align-items: center;
  display: flex;

  .ant-menu {
    background: #14181c;
    border: 0;

    a {
      color: white;
      font-size: 16px;
      &:hover {
        color: #64bde3;
      }
    }

    .ant-menu-item {
      border-bottom: 0;
      top: 0;
      padding: 0 10px;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    & .navbar-post-btn {
      border: 0;
      padding: 0;
      margin: 0;

      .anticon {
        margin: 0;
        font-size: 17px;
      }

      a {
        display: none;
      }
    }

    & .main-navbar-searchbar {
      display: none;
    }

    & .navbar-avatar-name {
      display: none;
    }
  }
`;

export default Wrapper;
