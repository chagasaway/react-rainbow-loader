import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import notVisible from './HOC/notVisible';

const buildStyles = ({ height, duration, colors }) => {
  return {
    height: height,
    animation: `rainbow ${duration}s ease infinite`,
    backgroundImage: `linear-gradient(125deg, ${colors.join(', ')})`
  };
};

class RainbowLoader extends Component {
  render() {
    const style = buildStyles(this.props);
    return (
      <div className='RainbowLoader' style={style} />
    );
  }
};

// Proptypes
RainbowLoader.propTypes = {
  visible: PropTypes.bool.isRequired,
  height: PropTypes.string,
  duration: PropTypes.number,
  colors: PropTypes.array
};

// Default proptypes
RainbowLoader.defaultProps = {
  height: '5px',
  duration: 10,
  colors: [
    '#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'
  ]
};

export default notVisible(RainbowLoader, ['visible']);
