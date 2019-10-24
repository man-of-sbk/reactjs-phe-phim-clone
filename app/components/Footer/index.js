/**
 *
 * Footer
 *
 */

import React from 'react';
import Col from 'antd/lib/col';

import Wrapper from './styledComponents/Wrapper';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Footer() {
  return (
    <Wrapper>
      <Col xs={24} lg={12}>
        Col
      </Col>
      <Col xs={24} lg={12}>
        Col
      </Col>
    </Wrapper>
  );
}

Footer.propTypes = {};

export default Footer;
