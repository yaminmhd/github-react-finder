import React from 'react';
import {shallow} from 'enzyme';
import RepoItem from './RepoItem';

describe('RepoItem', ()=>{
  it('should render RepoItem correctly', () => {
    const test = {
      "name": "github-react-finder",
      "description": null,
      "html_url": "https://github.com/yaminmhd/github-react-finder"
    }
    const wrapper = shallow(<RepoItem repo={test}/>);
    expect(wrapper.find('h5')).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('a')).toHaveLength(1);
  });

  it('should show value for description', () => {
    const test = {
      "name": "github-react-finder",
      "description": 'test',
      "html_url": "https://github.com/yaminmhd/github-react-finder"
    };
    const wrapper = shallow(<RepoItem repo={test}/>);
    expect(wrapper.find('p').props().children).toEqual('test');
  });
})