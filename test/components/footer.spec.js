import React from 'react';
import 'babel-polyfill';

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';

import Footer from '../../app/components/Footer.jsx';

describe('<Footer />', () => {
  it('[shallow] should render one .footer component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.is('.footer')).to.equal(true);
  });
  it('[shallow] should define a prop for children', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.props().children).to.be.defined;
  });
  // it('should have four child nodes', () => {
  //   const wrapper = shallow(<Footer />);
  //   expect(wrapper.props().children).to.have.length(4);
  // });
});
