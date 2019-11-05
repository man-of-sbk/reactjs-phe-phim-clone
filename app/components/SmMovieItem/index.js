/**
 *
 * SmMovieItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styledComponents/Wrapper';
// import styled from 'styled-components';

function SmMovieItem({ movie }) {
  return (
    <Wrapper mouseEnterDelay={0.1} title={movie.title} key={movie.id}>
      <a className="movie-item" href={`/movie/${movie.id}`}>
        <img
          className="movie-banner"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </a>
    </Wrapper>
  );
}

SmMovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default SmMovieItem;
