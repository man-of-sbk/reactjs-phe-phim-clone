/**
 *
 * LgMovieList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Tooltip from 'antd/lib/tooltip';

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
            <Tooltip
              mouseEnterDelay={0.1}
              className="list-item-container"
              title={movie.title}
              key={movie.id}
            >
              <div className="movie-item">
                <img
                  className="movie-banner"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            </Tooltip>
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
