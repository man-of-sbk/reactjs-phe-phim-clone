import { createGlobalStyle } from 'styled-components';

// *** ni: => not important
const GlobalThemeStyles = createGlobalStyle`
  .rounded-pill {
    border-radius: 50px;
  }

  .d-flex {
    display: flex!important;
  }

  .d-flex-ni {
    display: flex;
  } 

  .d-none {
    display: none!important;
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

  .h-100 {
    height: 100%;
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

  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
`;

export default GlobalThemeStyles;
