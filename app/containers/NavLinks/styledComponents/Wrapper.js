/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import Menu from 'antd/lib/menu';
import { secondary, primary } from 'cssVariable';
import * as breakpoints from 'breakpoints';

const Wrapper = styled(Menu)`
  align-items: center;
  border: 0;
  .search-navlink {
    i {
      display: none;
      vertical-align: 1px;
      font-size: 20px;
      color: ${secondary};
    }
  }
  .right-links-container {
    display: flex;
    margin-left: auto;
    > * {
      margin-left: 10px;
    }
    .ant-dropdown-trigger {
      margin-top: -16px;
      margin-left: 20px;
      height: 50px;
      color: ${primary};
      .avatar-name {
        margin-left: 10px;
        .anticon {
          vertical-align: 2px;
          margin: 0;
        }
      }
    }
  }
  @media (max-width: ${breakpoints.xs}px) {
    display: ${props => props.mode === 'horizontal' && `none !important`};
  }
  @media (max-width: ${breakpoints.md}px) {
    .search-input {
      display: none;
    }
    .search-navlink i {
      display: block;
    }
  }
  @media (max-width: ${breakpoints.sm}px) {
    .write-post-btn {
      border: ${props => props.mode === 'horizontal' && `0`};
      padding: ${props => props.mode === 'horizontal' && `0`};
      > a {
        display: ${props => props.mode === 'horizontal' && `none`};
      }
      > i {
        margin: ${props => props.mode === 'horizontal' && `0`};
        font-size: ${props => props.mode === 'horizontal' && `20px`};
      }
    }
    .right-links-container .ant-dropdown-trigger {
      margin-top: 0;
      height: initial;
      .avatar-name {
        display: none;
      }
    }
  }
`;

export default Wrapper;
