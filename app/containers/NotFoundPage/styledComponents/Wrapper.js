import styled from 'styled-components';
import { primary } from 'cssVariable';
// import * as breakpoints from 'breakpoints';

const Wrapper = styled.div`
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
      font-size: 25px;
    }
  }
`;

export default Wrapper;
