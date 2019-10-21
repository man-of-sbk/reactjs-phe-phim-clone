import { createGlobalStyle } from 'styled-components';

const GlobalThemeStyles = createGlobalStyle`
  .rounded-pill {
    border-radius: 50px;
  }

  .d-flex {
    display: flex!important;
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

  .float-left {
    float: left;
  }

  .float-right {
    float: right;
  }

  .ml-auto {
    margin-left: auto
  }
`;

export default GlobalThemeStyles;
