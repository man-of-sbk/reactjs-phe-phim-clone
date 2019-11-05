import { createGlobalStyle } from 'styled-components';

import { primary, secondary, lightOnDark, darkGrey, dark } from 'cssVariable';
import * as breakpoints from 'breakpoints';

const GlobalStyle = createGlobalStyle`
  .ant-layout-header {
    height: 64px;
  }

  .ant-menu-item {
    display: flex;
    align-items: center;
  }

  a::before {
    content: none!important;
  }

  .slick-dots  {
    button::before {
      color: white!important;
      opacity: .7!important;
    }

    .slick-active button::before {
      color: ${primary}!important;
      opacity: 1!important;
    }
  }

  .ant-tooltip-inner {
    text-align: center;
  }

  .ant-message .anticon {
    vertical-align: 2px;
  }

  .ant-pagination {
    text-align: center;

    > li {
      border-color: ${darkGrey};
      background: ${lightOnDark};

      a {
        color: ${secondary};
      }
    }
    
    .ant-pagination-item-link,
    .ant-pagination-disabled {
      border-color: ${darkGrey};
      background: ${lightOnDark};
      color: ${secondary}
    }

    .anticon {
      vertical-align: 1px;
    }

    .ant-pagination-item-ellipsis {
      color: ${secondary}!important;
    }

    .ant-pagination-item-active {
      border-color: ${primary};

      a {
        color: ${primary};
      }
    }
  }

  .ant-menu-item{
    :active {
      background-color: ${dark};
    }
  }

  /* edit user drawer (profile page) */
  .edit-profile-drawer {
    .ant-drawer-content-wrapper {
      width: ${breakpoints.sm}px!important;
    }

    .edit-drawer-footer {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      border-top: 1px solid #e9e9e9;
      padding: 10px 16px;
      background: #fff;

      .submit-btn {
        float: right;

        .anticon {
          margin-right: 0;
        }
      }
    }

    @media(max-width: ${breakpoints.sm}px) {
      & .ant-drawer-content-wrapper {
        width: 350px!important;
      }
    }
  }

  .ant-modal {
    margin-bottom: 25px;
  }
`;

export default GlobalStyle;
