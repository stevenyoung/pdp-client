import React from 'react';
import 'babel-polyfill';

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';

import PlaceInfo from '../../app/components/PlaceInfo';

describe('<PlaceInfo />', () => {
  const props = {
    selected: {}
  };
  it('[shallow] render no .placeinfo component if no place is selected', () => {
    const wrapper = shallow(<PlaceInfo {...props} />);
    expect(wrapper.is('.placeinfo')).to.equal(false);
  });
  it('[shallow] render .placeinfo component only if a place is selected', () => {
    props.selected.place = {};
    const wrapper = shallow(<PlaceInfo {...props} />);
    expect(wrapper.is('.placeinfo')).to.equal(true);
  });
  it('[shallow] should define a prop for children', () => {
    const wrapper = shallow(<PlaceInfo {...props} />);
    expect(wrapper.props().children).to.be.defined;
  });
});
