import React from 'react';

import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ResultsSummary from '../../app/components/ResultsSummary';

describe('<ResultsSummary />', () => {
  it('[shallow] should render one locations list component', () => {
    const wrapper = shallow(<ResultsSummary places="" />);
    expect(wrapper.is('.placelistitem')).to.equal(true);
  });
});
