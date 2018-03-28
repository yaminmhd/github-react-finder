import React from 'react';
import {shallow} from 'enzyme';
import SearchBar from './SearchBar';

describe('SearchBar', ()=>{
  it('should render SearchBar correctly', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('should trigger the handleInputChange function on change', () => {
    const mockHandler = jest.fn();
    const wrapper = shallow(<SearchBar onSearchTermChange={mockHandler}/>);
    wrapper.find('input').simulate('change', {target:{value:'a'}});
    expect(wrapper.state().searchTerm).toEqual('a');
  });
})