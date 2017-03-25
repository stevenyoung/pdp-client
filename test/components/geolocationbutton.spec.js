import React from 'react';
import 'babel-polyfill';

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';

import { GeolocationButton } from '../../app/components/GeolocationButton';

describe('<GeolocationButton />', () => {
  it('[shallow] should render one button component', () => {
    const wrapper = shallow(<GeolocationButton />);
    expect(wrapper.is('.more-locations')).to.equal(true);
  });
  it('[shallow] should define a prop for children', () => {
    const wrapper = shallow(<GeolocationButton />);
    expect(wrapper.props().children).to.be.defined;
  });
});
