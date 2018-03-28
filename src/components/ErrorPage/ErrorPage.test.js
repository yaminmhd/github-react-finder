import React from 'react';
import {shallow} from 'enzyme';
import ErrorPage from './ErrorPage';

describe('Error Page', ()=>{
  it('should render Error Page correctly', () => {
    const wrapper = shallow(<ErrorPage/>);
    expect(wrapper.find('img')).toHaveLength(1);
  });
})