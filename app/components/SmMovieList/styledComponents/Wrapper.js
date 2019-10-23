/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { secondary, primary } from 'cssVariable';

import MovieListContainer from 'components/MovieListContainer/index';

const Wrapper = styled(MovieListContainer)`
  /* create a fixed width for slider container in order to bring
  a fast loading feeling to clients in case loading time of slider are congested */
  min-height: 260px;

  .list-item-container {
    padding: 0 5px;
    position: relative;

    .progress-circle {
      position: absolute;
      width: 60px;
      top: 10px;
      right: 20px;
    }

    .movie-banner {
      border: 4px solid transparent;
      display: block;
      width: 100%;
      height: 140px;
      object-fit: cover;
      transition: 0.1s;

      :hover {
        border-color: ${primary};
      }
    }

    h3 {
      text-align: center;
      padding: 0 10px;
      color: ${secondary};
    }
  }
`;

export default Wrapper;
