/**
 *
 * LgMovieList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import MovieItem from 'components/MovieItem/index';

import { slideSettings } from './config';

import Wrapper from './styledComponents/Wrapper';

function LgMovieList({ movies, title }) {
  return (
    <Wrapper title={title}>
      {/* put 'movies &&' here, not in .map() below to initiate <Slider> whenever 'movies' is changed,
      just as when we need to refresh slickjs in application running with pure js when we want to
      update items inside that slickjs slider. */}
      {movies && (
        <Slider {...slideSettings}>
          {movies.map(movie => (
            <div className="list-item-container" key={movie.id}>
              <MovieItem movie={movie} />
            </div>
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
