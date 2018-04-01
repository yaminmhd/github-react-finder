import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from "enzyme";

it('should renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  // const wrapper = shallow(<App/>);
  // expect(wrapper.find('BrowserRouter')).toHaveLength(1);
});