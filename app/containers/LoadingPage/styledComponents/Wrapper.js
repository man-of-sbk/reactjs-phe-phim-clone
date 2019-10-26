/* eslint-disable prettier/prettier */
import styled from 'styled-components';

import { dark } from 'cssVariable';

const Wrapper = styled.div`
  background: ${dark};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 400px;
    height: 400px;
  }
`;

export default Wrapper;
