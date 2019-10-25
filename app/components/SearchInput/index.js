/**
 *
 * SearchInput
 *
 */

import Input from 'antd/lib/input';
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
  .ant-input {
    /* width: ${props => props.width}; */
    /* border: ${props => (props.bordered ? `1px solid #456` : `0`)}; */
    border: 0;
    color: #bcd;
    background: #242d35;
    border-radius: 50px;

    &::placeholder {
      color: #bcd;
      opacity: 1;
    }
  }

  .anticon-search {
    color: #bcd;
    margin: 0;
  }
`;

export default SearchInput;
