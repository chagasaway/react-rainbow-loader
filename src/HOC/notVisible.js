import React, { Component } from 'react';

export default function notVisible(WrappedComponent, visibilityProps) {
  return class NotVisible extends Component {
    render() {
      const missingProps = visibilityProps.filter((prop) => {
        return typeof this.props[prop] === 'undefined' ||
          this.props[prop] === false;
      });

      if (missingProps.length) {
        return null;
      }

      return (
        <WrappedComponent {...this.props} />
      );
    }
  };
}
