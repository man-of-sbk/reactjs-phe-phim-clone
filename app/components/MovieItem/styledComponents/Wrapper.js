/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { secondary } from 'cssVariable';

// import { Link } from 'react-router-dom';

const Wrapper = styled.a`
  text-decoration: none;
  cursor: pointer;

  .progress-circle {
    position: absolute;
    width: 60px;
    top: 10px;
    right: 20px;
  }

  .movie-banner {
    display: block;
    margin-bottom: 8px;
    width: 100%;
    height: 290px;
    object-fit: cover;
  }

  h3 {
    text-align: center;
    padding: 0 10px;
    color: ${secondary};
  }
`;

export default Wrapper;
