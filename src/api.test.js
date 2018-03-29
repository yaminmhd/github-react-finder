import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { getProfile, getRepos } from "./api";
import fetchMock from "fetch-mock";
import SearchBar from "./components/SearchBar/SearchBar";
import { shallow } from "enzyme";

const term = "yaminmhd";
const id = "0411e12b010f75a6c751";
const secret = "8e1123577ee45b8e1f24df68d24f71f286f12224";
const repoParams = `?per_page=15
&sort=created:asc
&client_id=${id}&client_secret=${secret}`;

afterEach(fetchMock.restore);

it('should behave...', () => {

});

// it("should fetch profile response from github api", async () => {
//   fetchMock.mock(
//     `https://api.github.com/users/${term}?client_id=${id}&client_secret=${secret}`,
//     JSON.stringify({ body: `profile` })
//   );

//   const result = await getProfile(term);
//   expect(result).toHaveProperty(`body`, `profile`);
// });

// it("should fetch repo response from github api", async () => {
//   fetchMock.get(
//     `https://api.github.com/users/${term}/repos${repoParams}`,
//     JSON.stringify({ body: `repo` })
//   );
//   const result = await getRepos(term);

//   expect(result).toHaveProperty(`body`, `repo`);
// });


