import React from "react";
import ReactDOM from "react-dom";
import GitHubApp from "./GitHubApp";
import { shallow } from "enzyme";
import { getUserData, getProfile } from "../util/api";
import fetchMock from "fetch-mock";

afterEach(fetchMock.restore);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GitHubApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should intercept any api calls and set state", async () => {
  const term = "yaminmhd";
  fetchMock.mock(`*`, JSON.stringify({ test: `profileObject` }));
  const wrapper = shallow(<GitHubApp />);
  await wrapper.instance().inputSearch(term);

  expect(wrapper.state("profile")).toHaveProperty(`test`, `profileObject`);
});

// it("should handle errors", async () => {
//   const term = "yaminmhd";
//   const id = "0411e12b010f75a6c751";
//   const secret = "8e1123577ee45b8e1f24df68d24f71f286f12224";
//   const mockEvent = { preventDefault: jest.fn() };
//   const result = fetchMock.get(`*`, {
//     throws: "Error setting profile and repo"
//   }).catch((e)=>{
//     console.log('Error caught');
//   })

//   const wrapper = shallow(<App />);
//   //await wrapper.instance().inputSearch();
//   //console.log(await wrapper.instance().inputSearch(term));
//   //console.log(wrapper.state());

//   expect(result).toThrow('Error setting profile and repo');
// });
