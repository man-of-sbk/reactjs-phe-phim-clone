/* eslint-disable prettier/prettier */
import styled from 'styled-components';

import MovieListContainer from 'components/MovieListContainer/index';

const Wrapper = styled(MovieListContainer)`
  /* create a fixed width for slider container in order to bring
  a fast loading feeling to clients in case loading time of slider are congested */
  min-height: 490px;

  .list-item-container {
    padding: 0 10px;
    position: relative;
  }
`;

export default Wrapper;
