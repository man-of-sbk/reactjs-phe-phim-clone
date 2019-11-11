export const renderSeatClass = (seat, userId, seatState) => {
  const activeClass = seatState ? `active` : ``;

  if (seat === userId) {
    return `seat my-booked-seat ${activeClass}`;
  }

  return `seat ${seat !== null ? `booked-seat` : `empty-seat`} ${activeClass}`;
};

export const seatIdGenerator = (rowIndex, seatIndex) =>
  rowIndex.toString() + seatIndex.toString();

export const initseatsStatus = (seats, callback = () => {}) => {
  if (!seats) return;

  const res = {};

  seats.forEach((row, rowIndex) => {
    row.forEach((seat, seatIndex) => {
      res[seatIdGenerator(rowIndex, seatIndex)] = false;
    });
  });

  callback(res);
};
