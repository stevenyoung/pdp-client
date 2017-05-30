import React from 'react';
import 'babel-polyfill';

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';

import NewPlaceMarker from '../../app/components/NewPlaceMarker';

describe('<NewPlaceMarker />', () => {
  it('[shallow] should render one button component', () => {
    const wrapper = shallow(<NewPlaceMarker />);
    expect(wrapper.is('.addplace')).to.equal(true);
  });
  it('[shallow] should define a prop for children', () => {
    const wrapper = shallow(<NewPlaceMarker />);
    expect(wrapper.props().children).to.be.defined;
  });
});
