/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/**
 *
 * SeatBookingPage
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import produce from 'immer';

import message from 'antd/lib/message';

import CinemaScreen from 'components/CinemaScreen/index';
import Header from './components/Header';

import Wrapper from './styledComponents/Wrapper';

import { singleSeat } from './utils/singleSeatHelpers';
import {
  renderSeatClass,
  initseatsStatus,
  seatIdGenerator,
} from './utils/seatsHelpers';

function SeatBookingPage({
  title,
  seats,
  isFetchingSeats,
  onOk,
  userId,
  ...rest
}) {
  const [seatsClickStatus, setseatsClickStatus] = useState(false);
  const [bookedSeatsMap, setBookedSeatsMap] = useState(false);
  const [chosenSeats, setChosenSeats] = useState([]);

  useEffect(() => {
    initseatsStatus(seats, newseatsClickStatus =>
      setseatsClickStatus(newseatsClickStatus),
    );

    setBookedSeatsMap(seats);
  }, [seats]);

  const handleOnClick = (posX, posY) => {
    const seatId = seatIdGenerator(posY, posX);
    const seatRow = bookedSeatsMap[posY];
    const currentClickState = seatsClickStatus[seatId];

    const hasSingleSeat = singleSeat({
      seatXposition: posX,
      currentClickState,
      seatRow,
      userId,
    });

    if (!hasSingleSeat) return message.error('bạn không được để ghế trống !');

    setseatsClickStatus(
      produce(seatsClickStatus, draft => {
        draft[seatId] = !draft[seatId];
      }),
    );

    setBookedSeatsMap(
      produce(bookedSeatsMap, draft => {
        draft[posY][posX] = !currentClickState ? userId : null;
      }),
    );

    setChosenSeats(
      produce(chosenSeats, draft => {
        if (!currentClickState) {
          draft.push({ x: posX, y: posY, value: true });
          return;
        }
        const thisSeat = draft.find(seat => seat.x === posX && seat.y === posY);
        const indexOfThisSeat = draft.indexOf(thisSeat);

        draft.splice(indexOfThisSeat, 1);
      }),
    );
  };

  const handleOnOk = () => onOk(chosenSeats);

  return (
    <Wrapper
      {...rest}
      onOk={handleOnOk}
      cancelButtonProps={{ className: 'cancel-btn' }}
    >
      <Header title={title} />
      <div className="screen" />
      <CinemaScreen title={title} className="cinema-screen" height={70} />
      <div className="seat-section">
        {seats &&
          seats.map((seatRow, seatRowIndex) => (
            <div className="seat-row" key={seatRowIndex}>
              {seatRow.map((seat, seatIndex) => {
                const seatId = seatIdGenerator(seatRowIndex, seatIndex);
                return (
                  <button
                    key={seatIndex}
                    className={renderSeatClass(
                      seat,
                      userId,
                      seatsClickStatus[seatId],
                    )}
                    type="button"
                    onClick={
                      seat === null
                        ? () => handleOnClick(seatIndex, seatRowIndex)
                        : () => {}
                    }
                  >
                    <span>{`${seatRowIndex + 1}${seatIndex + 1}`}</span>
                  </button>
                );
              })}
            </div>
          ))}
      </div>
    </Wrapper>
  );
}

SeatBookingPage.propTypes = {
  title: PropTypes.string,
  seats: PropTypes.array,
  isFetchingSeats: PropTypes.bool.isRequired,
  onOk: PropTypes.func.isRequired,
  userId: PropTypes.number,
};

export default SeatBookingPage;
