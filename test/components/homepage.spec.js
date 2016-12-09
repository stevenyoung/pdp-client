import React from 'react';

import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import HomePage from '../../app/components/HomePage.jsx';

describe('<HomePage />', () => {
  it('[SHALLOW] should create one .home component', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.is('.home')).to.equal(true);
  });

  it('should have four child nodes', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.props().children).to.have.length(4);
  });

  it('should provide content navigation');
  describe('<Navigation />', () => {
    it('should show links to primary sections');
  });
  it('should display home page header');
  it('should display main home page content');
  it('should display footer');
});
