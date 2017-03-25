import React from 'react';

import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { LocationLink } from '../../app/components/LocationLink';

const setup = () => {
  const props = {
    place: {}
  };

  return {
    props
  };
};

describe('<LocationLink />', () => {
  it('[shallow] should render one locations list component', () => {
    const { props } = setup();
    const wrapper = shallow(<LocationLink {...props} />);
    expect(wrapper.is('.locationitem')).to.equal(true);
  });
});
