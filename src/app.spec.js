import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import App from './app';

describe('App', () => {
  it('should render', () => {
    const component = shallow(<App/>);
    expect(component).to.exist;
  });
});
