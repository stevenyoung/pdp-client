import React from 'react';

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow, render } from 'enzyme';

import MapContainer from '../../app/components/MapContainer.jsx';

describe('<MapContainer />', () => {
  it('<shallow> should contain one map node', () => {
    const wrapper = shallow(<MapContainer />);
    expect(wrapper.find('.leafletmapcontainer')).to.have.length(1);
  });
  it('<render> should be initialized as leaflet container', () => {
    const wrapper = render(<MapContainer />);
    expect(wrapper.find('#leafletmap')).to.have.length(1);
  });
});
