/**
 *
 * MovieItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { subStr } from 'utils/subStr';
import AltImg from 'images/alt-img.jpg';

import LazyPercentageCircle from 'components/LazyPercentageCircle/index';
import Wrapper from './styledComponents/Wrapper';
// import styled from 'styled-components';

function MovieItem({ movie }) {
  return (
    <Wrapper className="movie-item" href={`/movie/${movie.id}`}>
      {movie.vote_average !== undefined && (
        <LazyPercentageCircle value={movie.vote_average * 10} />
      )}
      <img
        className="movie-banner"
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : AltImg
        }
        alt={movie.title}
      />

      <h3>{subStr(movie.title, 6)}</h3>
    </Wrapper>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
