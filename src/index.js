import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import notVisible from './HOC/notVisible';

const RainbowLoader = () => {
  return (
    <div className='RainbowLoader' />
  );
};

// Proptypes
RainbowLoader.propTypes = {
  visible: PropTypes.bool.isRequired
};

// Default proptypes
RainbowLoader.defaultProps = {
  visible: true
};

export default notVisible(RainbowLoader, ['visible']);
