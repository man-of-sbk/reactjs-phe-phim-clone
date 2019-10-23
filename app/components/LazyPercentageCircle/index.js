/**
 *
 * LazyPercentageCircle
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import { dark, primary } from 'cssVariable';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';

import Wrapper from './styledComponents/Wrapper';

const style = buildStyles({
  pathTransitionDuration: 0.8,
  backgroundColor: '#242d35',
  pathColor: primary,
  trailColor: dark,
});

function LazyPercentageCircle({ value, className }) {
  const [isSeen, setIsSeen] = useState(false);

  return (
    <VisibilitySensor>
      {({ isVisible }) => {
        // *** make sure the progress won't re-run from 0 when it's visible
        if (!isSeen) setIsSeen(isVisible);

        const percentage = isSeen ? value : 0;
        return (
          <Wrapper className={`progress-circle ${className}`}>
            <CircularProgressbarWithChildren
              strokeWidth={10}
              backgroundPadding={8}
              value={percentage}
              styles={style}
              background
            >
              <p className="percentage-point">{percentage}</p>
            </CircularProgressbarWithChildren>
          </Wrapper>
        );
      }}
    </VisibilitySensor>
  );
}

LazyPercentageCircle.propTypes = {
  value: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default LazyPercentageCircle;
