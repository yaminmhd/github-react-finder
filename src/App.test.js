import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import fetchMock from "fetch-mock";
import { shallow } from "enzyme";
import SearchBar from "./components/SearchBar/SearchBar";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should fetch the repos response from github api", async () => {
  const term = "yaminmhd";
  const id = "0411e12b010f75a6c751";
  const secret = "8e1123577ee45b8e1f24df68d24f71f286f12224";
  fetchMock.mock(
    `https://api.github.com/users/${term}/repos?per_page=1
  &sort=created:asc
  &client_id=${id}&client_secret=${secret}`,
    200
  );
  fetch(`https://api.github.com/users/${term}/repos?per_page=1
  &sort=created:asc
  &client_id=${id}&client_secret=${secret}`).then(res => {
    expect(res.status).toEqual(200);
  });
});
