import React from 'react';

import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import HomePage from '../../app/components/HomePage.jsx';

import ContentSearchInput from '../../app/components/ContentSearchInput.jsx';
import MapContainer from '../../app/components/MapContainer.jsx';
import Footer from '../../app/components/Footer.jsx';

describe('<HomePage /> [shallow]', () => {
  it('should create one .home component', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.is('.home')).to.equal(true);
  });
  it('should have three child nodes', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.props().children).to.have.length(3);
  });
  it('should display search input, map container, and footer', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(ContentSearchInput)).to.have.length(1);
    expect(wrapper.find(MapContainer)).to.have.length(1);
    expect(wrapper.find(Footer)).to.have.length(1);
  });
});
