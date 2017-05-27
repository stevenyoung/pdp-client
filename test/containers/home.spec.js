import React from 'react';

import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Home } from '../../app/containers/Home.jsx';

import ContentSearchInput from '../../app/components/ContentSearchInput.jsx';

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
  const enzymeWrapper = shallow(<Home {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe('<Home /> [shallow]', () => {
  it('should create one .home component', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.is('.home')).to.equal(true);
  });
  it('should have three child nodes', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.props().children).to.have.length(2);
  });
  it('should display search input and selected place information', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(ContentSearchInput)).to.have.length(1);
  });
});
