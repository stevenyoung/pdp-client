import React from 'react';

import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import MissingRoute from '../../app/components/MissingRoute';

describe('<MissingRoute />', () => {
  it('[shallow] should render one missing route component', () => {
    const wrapper = shallow(<MissingRoute />);
    expect(wrapper.is('#missing')).to.equal(true);
  });
});
