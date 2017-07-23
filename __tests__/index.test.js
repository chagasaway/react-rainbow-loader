'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import RainbowLoader from '../src/index';

describe('RainbowLoader Component', () => {
  it('should render correctly', () => {
    const component = TestUtils.renderIntoDocument(
      <RainbowLoader />
    );

    const loaderNode = ReactDOM.findDOMNode(component);
    expect(loaderNode.className).toEqual('RainbowLoader');
  });
});
