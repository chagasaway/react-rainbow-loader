import React from 'react';
import RainbowLoader from '../src/index';
import renderer from 'react-test-renderer';

describe('RainbowLoader Component', () => {
  it('should not render', () => {
    const tree = renderer.create(
      <RainbowLoader />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should not render', () => {
    const tree = renderer.create(
      <RainbowLoader visible={false} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with defaults', () => {
    const tree = renderer.create(
      <RainbowLoader visible={true} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with custom props', () => {
    const colors = ['#FFFFFF', '#000000'];
    const tree = renderer.create(
      <RainbowLoader
        visible={true} height='100%' duration={20} colors={colors}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
