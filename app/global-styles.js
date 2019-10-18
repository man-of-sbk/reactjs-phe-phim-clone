import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  span {
    line-height: 0;
  }

  .rounded-pill {
    border-radius: 50px;
  }

  .d-flex {
    display: flex;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .clearfix::after {
    display: block;
    clear: both;
    content: "";
  }

  .justify-content-between {
    justify-content: space-between !important;
  }

  .align-items-center {
    align-items: center !important;
  }

  .line-height-0 {
    line-height: 0;
  }

  .text-white {
    color: white;
  }
`;

export default GlobalStyle;
