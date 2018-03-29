import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {getProfile, getRepos} from './api';
import fetchMock from "fetch-mock";
import SearchBar from "./components/SearchBar/SearchBar";
import { shallow } from "enzyme";

it("should fetch response from github api", async() => {
  const term = "yaminmhd";
  const id = "0411e12b010f75a6c751";
  const secret = "8e1123577ee45b8e1f24df68d24f71f286f12224";
  fetchMock.mock(
    `https://api.github.com/users/${term}/repos?per_page=15
    &sort=created:asc
    &client_id=${id}&client_secret=${secret}`,200);
});