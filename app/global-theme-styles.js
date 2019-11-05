import { createGlobalStyle } from 'styled-components';

import { secondary, darkGrey, darkGrey3, primary } from 'cssVariable';

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

  .media-left {
    display: table-cell;
    vertical-align: top;
    padding-right: 10px;
  }

  .media-body {
    display: table-cell;
    width: 10000px;
    vertical-align: top;
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

  /* *** form control */
  .form-control {
    border: 0;
    color: ${secondary};
    background-color: ${darkGrey3}!important;

    ::placeholder {
      color: ${secondary};
      opacity: 1;
    }

    /* in case this input is treated with prefix property */
    .ant-input {
      color: ${secondary};
      border: 1px solid ${darkGrey};
      background-color: ${darkGrey3}!important;
    }

    .anticon {
      color: ${secondary};
    }
  }

  .bordered  {
    border: 1px solid ${darkGrey};
  }

  .border-radius-50 {
    border-radius: 50px;
  }

  /* .badge {
    display: inline-block;
    padding: 5px ;
    background-color: ${primary};
    color: ${darkGrey};
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    /* transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; */
  } */
`;

export default GlobalThemeStyles;
