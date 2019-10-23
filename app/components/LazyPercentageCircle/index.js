/* eslint-disable indent */
/**
 *
 * LazyPercentageCircle
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import VisibilitySensor from 'react-visibility-sensor';
import { dark, primary } from 'cssVariable';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';

import Wrapper from './styledComponents/Wrapper';

const style = buildStyles({
  pathTransitionDuration: 1.8,
  backgroundColor: '#242d35',
  pathColor: primary,
  trailColor: dark,
});

function LazyPercentageCircle({ value, className }) {
  // const [isSeen, setIsSeen] = useState(false);
  const [targetValue, setTargetValue] = useState(0);

  useEffect(() => {
    setTargetValue(value);
  }, []);

  return (
    <Wrapper className={`progress-circle ${className}`}>
      <CircularProgressbarWithChildren
        strokeWidth={10}
        backgroundPadding={8}
        value={targetValue}
        styles={style}
        background
      >
        <p className="percentage-point">{targetValue}</p>
      </CircularProgressbarWithChildren>
    </Wrapper>
  );
}

LazyPercentageCircle.propTypes = {
  value: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default LazyPercentageCircle;
