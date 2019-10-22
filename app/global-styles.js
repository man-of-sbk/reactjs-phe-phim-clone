import { createGlobalStyle } from 'styled-components';

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
`;

export default GlobalStyle;
