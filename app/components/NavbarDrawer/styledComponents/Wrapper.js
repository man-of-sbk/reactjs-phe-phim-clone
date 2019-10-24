/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import Drawer from 'antd/lib/drawer';

const Wrapper = styled(Drawer)`
  .right-links-container {
    display: flex;
    justify-content: center;

    > *:nth-child(1) {
      margin: 0;
    }
  }
`;

export default Wrapper;
