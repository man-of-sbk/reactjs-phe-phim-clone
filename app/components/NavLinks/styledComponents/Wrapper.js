/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import Menu from 'antd/lib/menu';
import { secondary } from 'cssVariable';
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
  }
`;

export default Wrapper;
