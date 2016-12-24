import React from 'react';

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow, render } from 'enzyme';

import Leafletmap from '../../app/components/Leafletmap';

describe('<Leafletmap />', () => {
  it('<shallow> should contain one map div', () => {
    const wrapper = shallow(<Leafletmap />);
    expect(wrapper.is('.leafletmapcontainer')).to.equal(true);
  });
  it('<render> should display markers given a list of places');
});
