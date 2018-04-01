import React from 'react';
import {shallow} from 'enzyme';
import NavBar from './NavBar.js';

describe('NavBar', ()=>{
  it('should render NavBar correctly', () => {
    const wrapper = shallow(<NavBar/>);
    expect(wrapper.find('Navbar')).toHaveLength(1);
  });

  it('should toggle NavBar correctly', () => {
    const wrapper = shallow(<NavBar/>);
    wrapper.find('NavbarToggler').simulate('click');
    expect(wrapper.state().isOpen).toEqual(true);
  });
})