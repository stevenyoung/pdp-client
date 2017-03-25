import React from 'react';

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';

import { SearchForm, MobileSearchForm } from '../../app/components/SearchForm';

const props = {};
describe('<ContentSearchInput />', () => {
  describe('<SearchForm />', () => {
    it('[shallow] should render one logosearchformwrapper .w-form component', () => {
      const wrapper = shallow(<SearchForm {...props} />);
      expect(wrapper.is('.logosearchformwrapper')).to.equal(true);
      expect(wrapper.is('.w-form')).to.equal(true);
    });
    it('[shallow] should define a prop for children', () => {
      const wrapper = shallow(<SearchForm />);
      expect(wrapper.props().children).to.be.defined;
    });
  });
  describe('<MobileSearchForm />', () => {
    it('[shallow] should render one .mobilesearchform component', () => {
      const wrapper = shallow(<MobileSearchForm {...props} />);
      expect(wrapper.is('.mobilesearchform')).to.equal(true);
      expect(wrapper.is('.logosearchformwrapper')).to.equal(false);
    });
    it('[shallow] should define a prop for children', () => {
      const wrapper = shallow(<MobileSearchForm />);
      expect(wrapper.props().children).to.be.defined;
    });
  });
});
