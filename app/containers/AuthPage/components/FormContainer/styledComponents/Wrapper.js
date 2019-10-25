/* eslint-disable prettier/prettier */
import styled from 'styled-components';

import { darkGrey2, primary, secondary } from 'cssVariable';

const Wrapper = styled.div`
  background: ${darkGrey2};
  text-align: center;
  padding: 16px;
  max-width: 350px;
  width: 350px;
  color: red;

  .logo {
    display: inline-block;
    width: 55px;
    margin-bottom: 10px;
  }

  form {
    text-align: left;

    button[type='submit'] {
      background: ${primary}!important;
      color: ${darkGrey2};
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  .login-footer-addition-info {
    margin: 0;
    color: ${secondary};
  }
`;

export default Wrapper;
