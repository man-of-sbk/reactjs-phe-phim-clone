/* eslint-disable prettier/prettier */
import styled from 'styled-components';

import { lightOnDark } from 'cssVariable';

const Wrapper = styled.div`
  position: relative;

  .movie-big-banner {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }

  .big-banner-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(to bottom, rgba(20, 24, 28, 0), ${lightOnDark});
  }
`;

export default Wrapper;
