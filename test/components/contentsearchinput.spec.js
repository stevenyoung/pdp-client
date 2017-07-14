import React from 'react';

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';

import ContentSearchInput from '../../app/components/ContentSearchInput';

describe('<ContentSearchInput />', () => {
  it('[shallow] should render one .w-form component', () => {
    const wrapper = shallow(<ContentSearchInput />);
    expect(wrapper.is('.w-form')).to.equal(true);
  });
  it('[shallow] should define a prop for children', () => {
    const wrapper = shallow(<ContentSearchInput />);
    expect(wrapper.props().children).to.be.not.an('undefined');
  });
});
