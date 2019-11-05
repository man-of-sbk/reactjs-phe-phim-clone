/* eslint-disable prettier/prettier */
import styled from 'styled-components';

import { secondary, darkGrey2 } from 'cssVariable';
import * as breakpoints from 'breakpoints';

const Div = styled.div`
  .movie-item {
    .progress-circle {
      top: 20px;
    }
  }

  .ant-form-inline .ant-form-item-label {
    margin-left: 20px;
    label {
      color: ${secondary};
    }
  }

  .movie-list-container {
    min-height: 700px;
    margin: 20px 0 !important;
  }

  .not-found-section {
    padding-top: 20px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;

    .message-container {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${secondary};
      font-size: 40px;
      font-weight: bold;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: ${darkGrey2};
    }
  }

  @media (min-width: 1200px) {
    .movie-list-container .ant-col {
      width: 20% !important;
    }
  }

  @media (max-width: ${breakpoints.xs}px) {
    .ant-form-inline .ant-row.ant-form-item {
      width: 100%;
      margin-bottom: 20px;

      .ant-form-item-label {
        margin-left: 0;
      }
    }
  }
`;

export default Div;
