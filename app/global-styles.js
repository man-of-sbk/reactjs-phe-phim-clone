import { createGlobalStyle } from 'styled-components';

import { primary } from 'cssVariable';

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
`;

export default GlobalStyle;
