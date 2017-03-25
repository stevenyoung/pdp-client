import React from 'react';

import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Home from '../../app/containers/Home.jsx';

import ContentSearchInput from '../../app/components/ContentSearchInput.jsx';
import PlaceInfo from '../../app/components/PlaceInfo';

describe('<HomePage /> [shallow]', () => {
  it('should create one .home component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.is('.home')).to.equal(true);
  });
  it('should have three child nodes', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.props().children).to.have.length(3);
  });
  it('should display search input and selected place information', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(ContentSearchInput)).to.have.length(1);
    expect(wrapper.find(PlaceInfo)).to.have.length(1);
  });
});
