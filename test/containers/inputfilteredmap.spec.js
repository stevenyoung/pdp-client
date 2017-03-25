import React from 'react';

import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// import { InputFilteredMap } from '../../app/containers/InputFilteredMap';

// import FilteredMapResults from '../../app/components/FilteredMapResults';

function setup() {
  const props = {
    query: {
      searchTerm: ''
    },
    places: [],
    mapCenter: {
      place: {
        lat: 37.749202,
        lng: -122.41575
      }
    },
    displayPlace: {}
  };
  // const enzymeWrapper = shallow(<InputFilteredMap {...props} />);
  return {
    props,
    // enzymeWrapper
  };
}

describe('<InputFilteredMap /> [shallow]', () => {
  it('should create one .resultsmap component');  // , () => {
  //   const { enzymeWrapper } = setup();
  //   expect(enzymeWrapper.is('.home')).to.equal(true);
  // });
  // it('should have three child nodes', () => {
  //   const { enzymeWrapper } = setup();
  //   expect(enzymeWrapper.props().children).to.have.length(3);
  // });
  // it('should display map results filtered by input', () => {
  //   const { enzymeWrapper } = setup();
  //   expect(enzymeWrapper.find(FilteredMapResults)).to.have.length(1);
  // });
});
