/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import Modal from 'antd/lib/modal';

import EmptySeat from 'images/empty-seat.png';
import BookedSeat from 'images/booked-seat.png';
import ChosenSeat from 'images/chosen-seat.png';
import MyBookedSeat from 'images/my-booked-seat.png';

import { secondary, darkGrey3 } from 'cssVariable';
// import Button from 'components/Button/index';
// import * as breakpoints from 'breakpoints';

const Wrapper = styled(({ ...rest }) => <Modal {...rest} />)`
  // width: 900px !important;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75);
  padding: 0;
  top: 20px;

  .notes-section {
    .title {
      font-weight: bold;
      font-size: 16px;
      display: block;
      margin-bottom: 10px;
    }

    .note-list {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;

      .item {
        width: 50%;
        margin-bottom: 10px;

        .seat-img {
          width: 30px;
          margin-right: 10px;
        }
      }
    }
  }

  .ant-divider {
    background: ${secondary};
    margin: 5px 0;
  }

  .movie-title {
    font-weight: bold;
    font-size: 36px;
    margin: -10px 0 5px 0;
    color: #bcd;
    color: ${secondary};
  }

  .movie-duration {
    display: block;
    margin-bottom: 20px;
  }

  .ant-modal-content {
    background: ${darkGrey3};
    color: ${secondary};
  }

  .ant-modal-footer {
    border-top: 0;

    .cancel-btn {
      display: none;
    }
  }

  .anticon {
    vertical-align: 4px;
    color: ${secondary};
  }

  .seat-section {
    min-height: 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    z-index: 999;
    position: relative;

    .seat-row {
      margin-bottom: 10px;

      .seat {
        background-color: transparent;
        border: 0;
        outline: 0;
        cursor: pointer;
        width: 35px;
        height: 35px;
        display: inline-block;
        background-repeat: no-repeat;
        background-size: cover;
        margin: 0 2px;
        padding: 0;
        position: relative;

        > span {
          color: white;
          font-size: 10px;
          font-weight: bold;
          position: absolute;
          top: 5.5px;
          left: 50%;
          transform: translate(-50%);
        }

        &.active {
          background-image: url(${ChosenSeat});
        }
      }

      .empty-seat {
        background-image: url(${EmptySeat});

        :hover {
          background-image: url(${ChosenSeat});
        }
      }

      .booked-seat {
        background-image: url(${BookedSeat});
      }

      .chosen-seat {
        background-image: url(${ChosenSeat});
      }

      .my-booked-seat {
        background-image: url(${MyBookedSeat});
      }
    }
  }
`;

export default Wrapper;
