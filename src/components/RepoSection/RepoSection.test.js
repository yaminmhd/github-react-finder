import React from "react";
import { shallow } from "enzyme";
import RepoSection from "./RepoSection";

describe("RepoSection", () => {
  it("should fetch RepoSection properly", () => {
    const response = [{}];
    const wrapper = shallow(<RepoSection repos={response} />);
    expect(wrapper.find('RepoItem')).toHaveLength(1);
  });
});
