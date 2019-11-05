/* eslint-disable prettier/prettier */
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  float: left;
  height: 100%;

  > img {
    height: 40px;
  }
`;

export default Wrapper;
