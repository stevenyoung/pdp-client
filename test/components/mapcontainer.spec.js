import React from 'react';

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow, render } from 'enzyme';

import MapContainer from '../../app/components/MapContainer.jsx';

describe('<MapContainer />', () => {
  it('<render> should contain one map node', () => {
    const wrapper = render(<MapContainer />);
    expect(wrapper.find('.leafletmapcontainer')).to.have.length(1);
  });
  it('<shallow> should contain node with a list of locations', () => {
    const wrapper = shallow(<MapContainer />);
    expect(wrapper.find('.w-dyn-list')).to.have.length(1);
  });
  it('should pass props to its children');
});
