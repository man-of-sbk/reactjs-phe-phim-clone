/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import CustomButton from 'commons/CustomButton/index';
import * as breakpoints from 'breakpoints';

const Button = styled(CustomButton)`
  display: none;

  .anticon {
    margin: 0;
    font-size: 18px;
    padding: 0;
    display: flex;
    align-items: center;
  }

  @media (max-width: ${breakpoints.xs}) {
    display: block;
  }
`;

export default Button;
