/**
 *
 * LgMovieList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import SmMovieItem from 'components/SmMovieItem/index';

import { slideSettings } from './config';

import Wrapper from './styledComponents/Wrapper';

function LgMovieList({ movies, title, ...rest }) {
  return (
    <Wrapper title={title} {...rest}>
      {/* put 'movies &&' here, not in .map() below to initiate <Slider> whenever 'movies' is changed,
      just as when we need to refresh slickjs in application running with pure js when we want to
      update items inside that slickjs slider. */}
      {movies && (
        <Slider {...slideSettings}>
          {movies.map(movie => (
            <SmMovieItem movie={movie} key={movie.id} />
          ))}
        </Slider>
      )}
    </Wrapper>
  );
}

LgMovieList.propTypes = {
  movies: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default LgMovieList;
