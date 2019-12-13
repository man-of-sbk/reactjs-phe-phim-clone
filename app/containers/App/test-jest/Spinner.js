import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ loading, size, color }) =>
  loading ? (
    <div className={`icon icon-spin text-center ${size} ${color}`} />
  ) : null;

Spinner.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Spinner;
