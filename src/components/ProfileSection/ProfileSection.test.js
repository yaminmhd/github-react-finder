import React from 'react';
import {shallow} from 'enzyme';
import ProfileSection from './ProfileSection';

describe('ProfileSection', ()=>{
  it('should render ProfileSection properly', () => {
    const wrapper = shallow(<ProfileSection/>);
    expect(wrapper.find('ProfileImageItem')).toHaveLength(1);
    expect(wrapper.find('ProfileDetailItem')).toHaveLength(1);
  });
})