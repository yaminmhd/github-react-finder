import React from 'react';
import {shallow} from 'enzyme';
import Footer from './Footer';

describe('Footer', ()=> {
  it('should render Footer properly', () => {
    const wrapper = shallow(<Footer/>);
    expect(wrapper.find('footer')).toHaveLength(1);
  });
})