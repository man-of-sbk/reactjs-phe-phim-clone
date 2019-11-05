/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

const Seat = ({
  onClick,
  posX,
  posY,
  className,
  isBooked,
  noActiveStatus,
  noActive,
  seatName,
  ...rest
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [lastError, setLastError] = useState(undefined);

  const handleOnClick = () => {
    if (isBooked) return;

    setIsClicked(!isClicked);
    onClick({
      isClicked: !isClicked,
      posX,
      posY,
    });
  };

  const renderClass = () => {
    if (noActive && noActiveStatus === 0) {
      return `${className} active`;
    }

    if (noActive && noActiveStatus === 1) {
      return `${className} `;
    }

    return `${className} ${isClicked ? `active` : ``}`;
  };

  useEffect(() => {
    if (noActive && noActiveStatus === 0) {
      setLastError(0);
      setIsClicked(true);
    }

    if (noActive && noActiveStatus === 1) {
      setLastError(1);
      setIsClicked(false);
    }

    if (!noActive && lastError !== undefined) {
      if (lastError === 0) {
        setLastError(undefined);
        setIsClicked(true);
      } else {
        setLastError(undefined);
        setIsClicked(false);
      }
    }
  }, [noActive, noActiveStatus]);

  return (
    <button
      className={renderClass()}
      type="button"
      {...rest}
      onClick={handleOnClick}
    >
      <span>{seatName}</span>
    </button>
  );
};

Seat.propTypes = {
  onClick: PropTypes.func.isRequired,
  posX: PropTypes.number.isRequired,
  posY: PropTypes.number.isRequired,
  isBooked: PropTypes.bool.isRequired,
  className: PropTypes.string,
  noActiveStatus: PropTypes.number,
  noActive: PropTypes.bool,
  seatName: PropTypes.string,
};

export default Seat;
