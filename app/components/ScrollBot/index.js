/**
 *
 * ScrollBot
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ScrollBot({ rootComponentId, onScrollBot, Children }) {
  const isBottom = ele =>
    ele.getBoundingClientRect().bottom <= window.innerHeight;

  const onScroll = () => {
    const wrappedElement = document.getElementById(rootComponentId);
    if (isBottom(wrappedElement)) {
      onScrollBot();
      document.removeEventListener('scroll', onScroll);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <>{Children}</>;
}

ScrollBot.propTypes = {
  rootComponentId: PropTypes.string.isRequired,
  onScrollBot: PropTypes.func,
  Children: PropTypes.node,
};

export default ScrollBot;
