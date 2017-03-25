import React from 'react';
import sinon from 'sinon';

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow, mount, render } from 'enzyme';

// import mapboxgl from 'mapbox-gl';
// import MapboxGLMap from '../../app/components/MapboxGLMap';

describe('<MapboxGLMap />', () => {
  it('<shallow> should contain one map div', () => {
    // const wrapper = shallow(<MapboxGLMap />);
    // expect(wrapper.is('.leafletmapcontainer')).to.equal(true);
  });
  it('given a mapbox token it will load tiles', () => {
    // const wrapper = render(<MapboxGLMap />);
    // expect(wrapper.mapTiles);
  });
  it('calls componentDidMount');  // , () => {
    // sinon.spy(MapboxGLMap.prototype, 'componentDidMount');
    // const wrapper = mount(<MapboxGLMap />);
    // expect(MapboxGLMap.prototype.componentDidMount.calledOnce).to.equal(true);
  // });
  it('will update view to lat, lng');
  it('will display a marker at lat, lng with a message');
  it('<render> should display markers given a list of places');
});
