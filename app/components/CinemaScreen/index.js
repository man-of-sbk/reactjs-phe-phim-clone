/**
 *
 * CinemaScreen
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styledComponents/Wrapper';

function CinemaScreen({ screenColor, height, title, ...rest }) {
  return (
    <Wrapper screenColor={screenColor} height={height} {...rest}>
      <div className="screen" />
      <div className="screen-brightness">
        <div className="outer-mask">
          <div className="inner-mask">
            <div className="screen-light" />
          </div>
        </div>
        <div className="content">Screen</div>
      </div>
    </Wrapper>
  );
}

CinemaScreen.propTypes = {
  screenColor: PropTypes.string,
  height: PropTypes.number,
  title: PropTypes.string,
};

export default CinemaScreen;
