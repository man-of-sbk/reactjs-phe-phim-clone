/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { dark, primary } from 'cssVariable';
// import * as breakpoints from 'breakpoints';

const Div = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  /* align-items: center; */

  main {
    position: relative;
    top: 120px;

    .status {
      color: ${primary};
      font-weight: bold;
      font-size: 120px;
    }

    .message {
      color: white;
      /* font-weight: bold; */
      font-size: 25px;
    }
  }
`;

export default Div;
