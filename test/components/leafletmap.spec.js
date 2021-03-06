import React from 'react';
import sinon from 'sinon';

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow, mount, render } from 'enzyme';

import Leafletmap from '../../app/components/Leafletmap';

describe('<Leafletmap />', () => {
  it('<shallow> should contain one map div', () => {
    const wrapper = shallow(<Leafletmap />);
    expect(wrapper.is('.leafletmapcontainer')).to.equal(true);
    expect(wrapper.find('.leafletmapcontainer')).to.have.length(1);
  });
  it('given a mapbox token it will load tiles', () => {
    const wrapper = render(<Leafletmap />);
    expect(wrapper.mapTiles);
  });
  it('calls componentDidMount', () => {
    sinon.spy(Leafletmap.prototype, 'componentDidMount');
    const wrapper = mount(<Leafletmap />);
    expect(Leafletmap.prototype.componentDidMount.calledOnce).to.equal(true);
  });
  it('will update view to lat, lng');
  it('will display a marker at lat, lng with a message');
  it('<render> should display markers given a list of places');
});
