/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styledComponents/Wrapper';

const BigMovieBanner = ({ src }) => {
  return (
    <Wrapper>
      <img className="movie-big-banner" src={src} alt="big-movie-banner" />
      <div className="big-banner-gradient" />
    </Wrapper>
  );
};

BigMovieBanner.propTypes = {
  src: PropTypes.string,
};

export default BigMovieBanner;
