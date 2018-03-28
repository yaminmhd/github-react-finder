import React from 'react';
import {shallow} from 'enzyme';
import ProfileImageItem from './ProfileImageItem';

describe('ProfileImageItem', ()=>{
  it('should render ProfileImageItem correctly', () => {
    const test={
      "avatar_url": 'https://avatars1.githubusercontent.com/u/23514774?v=4',
      "html_url": "https://github.com/yaminmhd"
    };
    const wrapper = shallow(<ProfileImageItem imageItem={test}/>);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('a')).toHaveLength(1);
  });
})