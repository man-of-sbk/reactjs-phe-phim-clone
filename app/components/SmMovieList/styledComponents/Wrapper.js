/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { secondary, primary } from 'cssVariable';

import MovieListContainer from 'components/MovieListContainer/index';

const Wrapper = styled(MovieListContainer)`
  /* create a fixed width for slider container in order to bring
  a fast loading feeling to clients in case loading time of slider are congested */
  min-height: 260px;
`;

export default Wrapper;
