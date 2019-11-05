import React from 'react';

import Divider from 'antd/lib/divider';

import EmptySeat from 'images/empty-seat.png';
import BookedSeat from 'images/booked-seat.png';
import ChosenSeat from 'images/chosen-seat.png';
import MyBookedSeat from 'images/my-booked-seat.png';

import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <>
      <h3 className="movie-title">{title}</h3>
      <Divider />
      <time className="movie-duration">120 phút</time>
      <div className="notes-section">
        <span className="title">* Chú thích</span>
        <ul className="note-list">
          <li className="item">
            <img className="seat-img" src={EmptySeat} alt="seats" />
            <span>Ghế trống</span>
          </li>
          <li className="item">
            <img className="seat-img" src={BookedSeat} alt="seats" />
            <span>Ghế đã đặt</span>
          </li>
          <li className="item">
            <img className="seat-img" src={ChosenSeat} alt="seats" />
            <span>ghế được chọn</span>
          </li>
          <li className="item">
            <img className="seat-img" src={MyBookedSeat} alt="seats" />
            <span>Ghế của tôi</span>
          </li>
        </ul>
      </div>
      <div className="screen" />
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
