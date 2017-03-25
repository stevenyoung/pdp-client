import React from 'react';

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow, mount } from 'enzyme';

// import MapContainer from '../../app/components/MapContainer';

// import Leafletmap from '../../app/components/Leafletmap';
// import ResultsSummary from '../../app/components/ResultsSummary';

describe('<MapContainer />', () => {
  it('should render one map container node', () => {
    // const wrapper = shallow(<MapContainer />);
    // expect(wrapper.is('.mapcontainer')).to.equal(true);
  });
  it('should contain one map node and one node with a list of locations', () => {
    // const wrapper = shallow(<MapContainer />);
    // expect(wrapper.find(Leafletmap)).to.have.length(1);
    // expect(wrapper.find(ResultsSummary)).to.have.length(1);
  });
  it('allows us to set an access token');
  it('should pass props to its children');
});
