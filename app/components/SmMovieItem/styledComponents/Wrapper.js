/* eslint-disable prettier/prettier */
import styled from 'styled-components';

import Tooltip from 'antd/lib/tooltip';

import { primary, secondary } from 'cssVariable';

const Wrapper = styled(Tooltip)`
  padding: 0 5px;
  position: relative;
  display: block;

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
`;

export default Wrapper;
