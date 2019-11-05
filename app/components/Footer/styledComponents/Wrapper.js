/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import Row from 'antd/lib/row';

import { secondary } from 'cssVariable';

const Wrapper = styled(Row)`
  color: ${secondary};
  padding: 60px 0 10px 0;

  h4 {
    color: ${secondary};
  }

  .social-link {
    margin-right: 20px;

    img {
      width: 40px;
    }
  }
`;

export default Wrapper;
