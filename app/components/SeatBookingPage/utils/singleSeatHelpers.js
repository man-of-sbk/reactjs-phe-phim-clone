export const singleSeat = ({
  currentClickState,
  seatRow,
  seatXposition: posX,
  userId,
}) => {
  if (currentClickState === false) {
    if (
      (seatRow[posX + 2] === userId && seatRow[posX + 1] === null) ||
      (posX + 2 === seatRow.length && seatRow[posX + 1] === null)
    ) {
      return false;
    }

    if (
      (seatRow[posX - 2] === userId && seatRow[posX - 1] === null) ||
      (posX - 2 === -1 && seatRow[posX - 1] === null)
    ) {
      return false;
    }
  } else if (
    currentClickState === true &&
    seatRow[posX + 1] === userId &&
    seatRow[posX - 1] === userId
  ) {
    return false;
  }

  return true;
};
