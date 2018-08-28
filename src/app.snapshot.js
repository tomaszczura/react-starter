import React from 'react';
import renderer from 'react-test-renderer';
import { fromJS } from 'immutable';
import App from './app';

const { expect } = global;

describe('App snapshot', () => {
  test('initial render', () => {
    const component = renderer.create(<App/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
