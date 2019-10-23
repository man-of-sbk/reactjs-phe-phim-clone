/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { primary, darkGrey } from 'cssVariable';

const Wrapper = styled.div`
  padding: 20px 0 45px;

  h2 {
    color: ${primary};
    font-weight: 400;
    margin: 0;
  }

  .ant-divider {
    background: ${darkGrey};
    margin: 15px 0 25px;
  }
`;

export default Wrapper;
