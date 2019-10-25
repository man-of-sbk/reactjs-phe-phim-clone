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
    <Wrapper className="container">
      <Col xs={24} lg={12}>
        <h4>Phê Phim</h4>
        <p>2018 Thử nghiệm cộng đồng , chờ giấy phép MXH của Bộ TT & TT</p>
      </Col>
      <Col xs={24} lg={12}>
        <h4>Theo dõi chúng tôi</h4>
        <a className="social-link" href="/">
          <img
            src="https://phephim.vn/assets/images/youtube.png"
            alt="phe phim youtube"
          />
        </a>

        <a className="social-link" href="/">
          <img
            src="https://phephim.vn/assets/images/facebook.svg"
            alt="phe phim facebook"
          />
        </a>

        <a className="social-link" href="/">
          <img
            src="https://phephim.vn/assets/images/insta.svg"
            alt="phe phim instagram"
          />
        </a>
      </Col>
    </Wrapper>
  );
}

Footer.propTypes = {};

export default Footer;
