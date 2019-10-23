/**
 *
 * LgMovieList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import LazyPercentageCircle from 'components/LazyPercentageCircle/index';
import { slideSettings } from './config';

import Wrapper from './styledComponents/Wrapper';

function LgMovieList({ movies }) {
  return (
    <Wrapper title="Đang Hot">
      <Slider {...slideSettings}>
        {movies &&
          movies.map(movie => (
            <div className="list-item-container" key={movie.id}>
              <div className="movie-item">
                <LazyPercentageCircle value={movie.vote_average * 10} />
                <img
                  className="movie-banner"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
              </div>
            </div>
          ))}
        <div className="list-item-container">
          <div className="movie-item">
            <LazyPercentageCircle value={20} />
            <img
              className="movie-banner"
              src="https://phephim.vn:3004/static/1570600151360-ubte5cd7g_image.jpeg"
              alt="test"
            />
            <h3>Thất sơn tâm linh tâm linh</h3>
          </div>
        </div>
        <div className="list-item-container">
          <div className="movie-item">
            <LazyPercentageCircle value={20} />
            <img
              className="movie-banner"
              src="https://phephim.vn:3004/static/1570600151360-ubte5cd7g_image.jpeg"
              alt="test"
            />
            <h3>Thất sơn tâm linh tâm linh</h3>
          </div>
        </div>
        <div className="list-item-container">
          <div className="movie-item">
            <img
              className="movie-banner"
              src="https://phephim.vn:3004/static/1570600151360-ubte5cd7g_image.jpeg"
              alt="test"
            />
            <h3>Thất sơn tâm linh tâm linh</h3>
          </div>
        </div>
        <div className="list-item-container">
          <div className="movie-item">
            <img
              className="movie-banner"
              src="https://phephim.vn:3004/static/1570600151360-ubte5cd7g_image.jpeg"
              alt="test"
            />
            <h3>Thất sơn tâm linh tâm linh</h3>
          </div>
        </div>
        <div className="list-item-container">
          <div className="movie-item">
            <img
              className="movie-banner"
              src="https://phephim.vn:3004/static/1570600151360-ubte5cd7g_image.jpeg"
              alt="test"
            />
            <h3>Joker</h3>
          </div>
        </div>
        <div className="list-item-container">
          <div className="movie-item">
            <img
              className="movie-banner"
              src="https://phephim.vn:3004/static/1570600151360-ubte5cd7g_image.jpeg"
              alt="test"
            />
            <h3>Thất sơn tâm linh</h3>
          </div>
        </div>
      </Slider>
    </Wrapper>
  );
}

LgMovieList.propTypes = {
  movies: PropTypes.array,
};

export default LgMovieList;
