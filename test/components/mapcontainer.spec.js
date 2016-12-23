import React from 'react';

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow, render } from 'enzyme';

import MapContainer from '../../app/components/MapContainer.jsx';

describe('<MapContainer />', () => {
  it('<render> should contain one map node', () => {
    const wrapper = shallow(<MapContainer />);
    expect(wrapper.is('.mapcontainer')).to.equal(true);
  });
  it('should contain node with a list of locations');
  it('should pass props to its children');
});
