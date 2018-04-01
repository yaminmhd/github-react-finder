import React from 'react';
import {shallow} from 'enzyme';
import LandingPage from './LandingPage';

it('should render LandingPage correctly', () => {
  const wrapper = shallow(<LandingPage/>);
  expect(wrapper.find('header')).toHaveLength(1);
});