/* eslint-disable prettier/prettier */
import styled from 'styled-components';

import { secondary } from 'cssVariable';
import * as breakpoints from 'breakpoints';

const Wrapper = styled.div`
  margin-top: 35px;
  color: ${secondary};
  display: flex;

  .book-seat-btn {
    background-color: #e71a0f !important;
    font-size: 15px;
    color: white !important;
    margin-bottom: 10px;

    font-size: 20px;
    padding: 0 20px;
    height: 40px;
    outline: 1px solid white !important;
    outline-offset: -5px;
    transition: 0.2s;

    ::after {
      content: none;
    }

    :hover {
      transform: scale(1.1);
    }

    :active {
      transform: scale(1.2);
    }
  }

  .user-info-list {
    .info-block {
      margin-bottom: 10px;

      .info-title {
        font-weight: bold;
        margin-right: 10px;
      }
    }
  }

  .right-section {
    padding: 0 25px;
  }

  .main-movie-poster {
    height: 360px;
    object-fit: cover;
    display: block;
  }

  .movie-info {
    padding: 0 20px;

    h2 {
      color: white;
      font-size: 45px;
      line-height: 1.2;
      margin: 0;
    }

    p {
      font-size: 15px;
    }

    .ant-divider {
      background: ${secondary};
      margin: 10px 0;
      clear: none;
    }

    .overview-section {
      .title-and-rating {
        display: flex;
        justify-content: space-between;
      }

      .progress-circle {
        width: 90px;
      }
    }
  }

  .comment-section {
    display: flex;

    > * {
      width: 50%;
    }

    .rating-section {
      width: 480px;
    }

    span {
      font-weight: bold;
      font-size: 17px;
      display: block;
    }

    .comment-area {
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.md}px) {
    .left-section {
      display: none;
    }

    .movie-info .overview-section .progress-circle {
      width: 70px;
    }
  }
`;

export default Wrapper;
