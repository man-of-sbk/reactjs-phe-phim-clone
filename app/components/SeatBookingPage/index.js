/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/**
 *
 * SeatBookingPage
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import message from 'antd/lib/message';

import CinemaScreen from 'components/CinemaScreen/index';
import Header from './components/Header';

import Seat from './components/Seat';
import Wrapper from './styledComponents/Wrapper';

function SeatBookingPage({
  title,
  seats,
  isFetchingSeats,
  onOk,
  userId,
  ...rest
}) {
  const [chosenSeats, setChosenSeats] = useState([]);
  const [singleSeat, setSingleSeat] = useState({ x: undefined, y: undefined });
  // console.log(chosenSeats);

  const addNewSeat = newSeat => {
    const newChosenSeats = [...chosenSeats];

    newChosenSeats.push(newSeat);
    setChosenSeats(newChosenSeats);
  };

  const singleSeatInTheLeft = ({ seatRow, posX, posY, isClicked }) => {
    const leftSeatNextToTheOneNextToThisSeatIndex = posX - 2;

    const leftSeatNextToTheOneNextToThisSeat =
      seatRow[leftSeatNextToTheOneNextToThisSeatIndex];

    const isLeftSeatNextToTheOneNextToThisSeatChosen = chosenSeats.find(
      seat =>
        seat.x === leftSeatNextToTheOneNextToThisSeatIndex && seat.y === posY,
    );

    if (
      isClicked &&
      (isLeftSeatNextToTheOneNextToThisSeatChosen !== undefined ||
        leftSeatNextToTheOneNextToThisSeat === userId ||
        leftSeatNextToTheOneNextToThisSeatIndex === -1)
    ) {
      const leftSeatNextToThisSeatIndex = posX - 1;
      const leftSeatNextToThisSeat = seatRow[leftSeatNextToThisSeatIndex];
      const isLeftSeatNextToThisSeatChosen = chosenSeats.find(
        seat => seat.x === leftSeatNextToThisSeatIndex && seat.y === posY,
      );

      if (leftSeatNextToThisSeat !== null) {
        console.log('ok left 1');
        return false;
      }

      if (
        isLeftSeatNextToThisSeatChosen &&
        isLeftSeatNextToThisSeatChosen.value === true
      ) {
        console.log('ok left 2');
        return false;
      }
      console.log('not ok left ');
      return true;
    }

    console.log('ok left 3');
    return false;
  };

  const singleSeatInTheRight = ({ seatRow, posX, posY, isClicked }) => {
    const rightSeatNextToTheOneNextToThisSeatIndex = posX + 2;

    const rightSeatNextToTheOneNextToThisSeat =
      seatRow[rightSeatNextToTheOneNextToThisSeatIndex];

    const isRightSeatNextToTheOneNextToThisSeatChosen = chosenSeats.find(
      seat =>
        seat.x === rightSeatNextToTheOneNextToThisSeatIndex && seat.y === posY,
    );

    if (
      isClicked &&
      rightSeatNextToTheOneNextToThisSeat !== undefined &&
      (isRightSeatNextToTheOneNextToThisSeatChosen !== undefined ||
        rightSeatNextToTheOneNextToThisSeat === userId ||
        rightSeatNextToTheOneNextToThisSeatIndex === seatRow.length)
    ) {
      const rightSeatNextToThisSeatIndex = posX + 1;
      const rightSeatNextToThisSeat = seatRow[rightSeatNextToThisSeatIndex];
      const isRightSeatNextToThisSeatChosen = chosenSeats.find(
        seat => seat.x === rightSeatNextToThisSeatIndex && seat.y === posY,
      );

      if (rightSeatNextToThisSeat !== null) {
        console.log('ok right 1');
        return false;
      }

      if (
        isRightSeatNextToThisSeatChosen &&
        isRightSeatNextToThisSeatChosen.value === true
      ) {
        console.log('ok right 2');
        return false;
      }

      console.log(
        'not ok right',
        rightSeatNextToTheOneNextToThisSeatIndex === seatRow.length,
      );
      return true;
    }

    console.log('ok right 3');
    return false;
  };

  const singleSeatInMiddle = ({ posX, posY, isClicked }) => {
    // const leftSeatNextToThisOne = seats[posX - 1];
    // const rightSeatNextToThisOne = seats[posX + 1];

    const isLeftSeatNextToThisOneChosen = chosenSeats.find(
      seat => seat.x === posX - 1 && seat.y === posY,
    );

    const isRightSeatNextToThisOneChosen = chosenSeats.find(
      seat => seat.x === posX + 1 && seat.y === posY,
    );

    if (
      !isClicked &&
      isLeftSeatNextToThisOneChosen !== undefined &&
      isRightSeatNextToThisOneChosen !== undefined
    ) {
      return true;
    }

    return false;
  };

  const handleSingleSeats = ({ posX, posY, isClicked }) => {
    (() => {
      // const seatPrevToNewSeat = chosenSeats.find(
      //   seat => seat.y === posY && seat.x === posX - 1,
      // );
      // const leftSeatSeparatedToNewSeatByTwoOnes = chosenSeats.find(
      //   seat => seat.y === posY && seat.x === posX - 2,
      // );
      // const seatNextToNewSeat = chosenSeats.find(
      //   seat => seat.y === posY && seat.x === posX + 1,
      // );
      // const rightSeatSeparatedToNewSeatByTwoOnes = chosenSeats.find(
      //   seat => seat.y === posY && seat.x === posX + 2,
      // );
      // if ((!isClicked || isClicked) && seatPrevToNewSeat && seatNextToNewSeat) {
      //   return {
      //     result: false,
      //     status: 0, // *** => single seat in middle
      //   };
      // }
      // if (
      //   isClicked &&
      //   leftSeatSeparatedToNewSeatByTwoOnes &&
      //   !seatPrevToNewSeat
      // ) {
      //   return {
      //     result: false,
      //     status: 1, // *** => single seat not in middle
      //   };
      // }
      // if (
      //   isClicked &&
      //   rightSeatSeparatedToNewSeatByTwoOnes &&
      //   !seatNextToNewSeat
      // ) {
      //   return {
      //     result: false,
      //     status: 1, // *** => single seat not in middle
      //   };
      // }
      // return {
      //   result: true,
      //   status: 1, // *** => seat not in middle
      // };
    })();

    const associatedSeatRow = seats[posY];
    const thereIsAsingleSeatInTheLeft = singleSeatInTheLeft({
      seatRow: associatedSeatRow,
      posX,
      posY,
      isClicked,
    });
    const thereIsAsingleSeatInTheRight = singleSeatInTheRight({
      seatRow: associatedSeatRow,
      posX,
      posY,
      isClicked,
    });
    const thereIsAsingleSeatInMiddle = singleSeatInMiddle({
      posX,
      posY,
      isClicked,
    });

    console.log(thereIsAsingleSeatInTheLeft);
    console.log(thereIsAsingleSeatInTheRight);

    if (thereIsAsingleSeatInTheLeft || thereIsAsingleSeatInTheRight) {
      return {
        result: false,
        status: 1, // *** => single seat not in middle
      };
    }

    // if (thereIsAsingleSeatInMiddle) {
    //   return {
    //     result: false,
    //     status: 0, // *** => single seat in middle
    //   };
    // }

    // if() {

    // }

    return { result: true };
  };

  const removeMovieChosen = ({ posX, posY, isClicked }) => {
    const thisSeatInChosenSeatsList = chosenSeats.find(
      seat => seat.x === posX && seat.y === posY,
    );

    const noSingleSeat = handleSingleSeats({ posX, posY, isClicked });

    if (!noSingleSeat.result) {
      setSingleSeat({
        x: posX,
        y: posY,
        status: noSingleSeat.status,
      });

      return message.error(
        `Bạn đã chọn ghế trống, vui lòng chọn ghế bên cạnh !`,
      );
    }

    setSingleSeat({ x: undefined, y: undefined });

    if (thisSeatInChosenSeatsList) {
      const newChosenSeats = [...chosenSeats];
      const indexOfThisSeat = newChosenSeats.indexOf(thisSeatInChosenSeatsList);

      newChosenSeats.splice(indexOfThisSeat, 1);
      return setChosenSeats(newChosenSeats);
    }

    const newSeat = { x: posX, y: posY, value: isClicked };
    addNewSeat(newSeat);
  };

  const handleOnChoosingSeat = ({ posX, posY, isClicked }) => {
    removeMovieChosen({ posX, posY, isClicked });
  };

  const renderClassForBtn = seat => {
    if (seat === userId) {
      return `seat my-booked-seat`;
    }

    return `seat ${seat !== null ? `booked-seat` : `empty-seat`}`;
  };

  // console.log('index page', seats);

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
                return (
                  <Seat
                    key={seatIndex}
                    noActiveStatus={singleSeat.status}
                    noActive={
                      singleSeat.x === seatIndex &&
                      singleSeat.y === seatRowIndex
                    }
                    seatName={`${seatRowIndex + 1}${seatIndex + 1}`}
                    className={renderClassForBtn(seat)}
                    isBooked={seat !== null}
                    posX={seatIndex}
                    posY={seatRowIndex}
                    onClick={seat === null ? handleOnChoosingSeat : () => {}}
                  />
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
