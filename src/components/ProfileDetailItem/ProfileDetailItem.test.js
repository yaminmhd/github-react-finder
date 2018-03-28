import React from "react";
import { shallow } from "enzyme";
import ProfileDetailItem from "./ProfileDetailItem";

describe("ProfileDetailItem", () => {
  it("should render ProfileDetailItem correctly", () => {
    const test = {
      public_repos: "30",
      public_gists: "6",
      followers: "0",
      following: "0",
      company: null,
      blog: "",
      location: null,
      created_at: "2016-11-17T03:10:07Z"
    };

    const wrapper = shallow(<ProfileDetailItem detailItem={test} />);
    expect(wrapper.find("span")).toHaveLength(4);
    expect(wrapper.find("ul")).toHaveLength(1);
    expect(wrapper.find("li")).toHaveLength(4);
  });

  it("should show value for company, blog and location", () => {
    const test = {
      public_repos: "30",
      public_gists: "6",
      followers: "0",
      following: "0",
      company: "Test Company",
      blog: "https://www.test.com",
      location: "Singapore",
      created_at: "2016-11-17T03:10:07Z"
    };

    const wrapper = shallow(<ProfileDetailItem detailItem={test} />);
    const [company, blog, location] = wrapper.find('li').map(item => item.props().children);
    expect(company).toContain('Test Company');
    expect(blog).toContain('https://www.test.com');
    expect(location).toContain('Singapore');
  });
});
