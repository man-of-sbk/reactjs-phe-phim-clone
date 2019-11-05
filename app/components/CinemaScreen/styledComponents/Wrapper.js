/* eslint-disable prettier/prettier */
import styled from 'styled-components';

import { secondary, darkGrey3 } from 'cssVariable';

const Wrapper = styled.div`
  .screen {
    height: 12px;
    background-color: ${darkGrey3};
    border-bottom: 5px solid black;
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75);
  }

  .screen-brightness {
    position: relative;
    margin-bottom: ${props => (props.height ? `-${props.height}px` : `-50px`)};

    .content {
      position: absolute;
      font-size: 20px;
      font-weight: bold;
      color: white;

      top: 12px;
      left: 50%;
      transform: translateX(-50%);
    }

    .screen-light {
      background: linear-gradient(
        ${props => props.screenColor || `#42484c`},
        transparent
      );
      height: ${props => (props.height ? `${props.height}px` : `50px`)};
      text-align: center;
    }

    .outer-mask {
      width: 100%;
      height: ${props => (props.height ? `${props.height * 2}px` : `100px`)};
      overflow: hidden;
      transform: skew(30deg, 0deg);
    }
    .inner-mask {
      width: 100%;
      height: ${props => (props.height ? `${props.height * 2}px` : `100px`)};
      overflow: hidden;
      transform: skew(-50deg, 0deg);
    }
  }
`;

export default Wrapper;
