import React from 'react';

import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { LocationLink } from '../../app/components/LocationLink';

const setup = () => {
  const props = {
    place: {
      id: 1,
      name: 'Location Name',
      title: 'Location Title',
      author: 'Location Artist'
    }
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
  it('[shallow] should contain a react-router link', () => {
    const { props } = setup();
    const wrapper = shallow(<LocationLink {...props} />);
    expect(wrapper.find('Link')).to.have.length(1);
  });
  it('[shallow] link should display place name, artwork title and artist', () => {
    const { props } = setup();
    const wrapper = shallow(<LocationLink {...props} />);
    expect(wrapper.find('Link').find('span.location-work-title')).to.have.length(1);
    expect(wrapper.find('Link').find('span.location-work-name')).to.have.length(1);
    expect(wrapper.find('Link').find('span.location-work-artist')).to.have.length(1);
  });
});
