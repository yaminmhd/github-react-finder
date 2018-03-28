import React, { Component } from "react";
import "./App.css";
import _ from "lodash";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import RepoSection from "./components/RepoSection/RepoSection";
import Footer from "./components/Footer/Footer";

const id = "0411e12b010f75a6c751";
const secret = "8e1123577ee45b8e1f24df68d24f71f286f12224";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      repos: [],
      inputEntered: false
    };
  }

  async inputSearch(term) {
    if (term === "") {
      this.setState({
        profile: [],
        repos: [],
        inputEntered: false
      });
    } else {
      const profileResponse = await fetch(
        `https://api.github.com/users/${term}?client_id=${id}&client_secret=${secret}`
      );

      const repoResponse = await fetch(
        `https://api.github.com/users/${term}/repos?per_page=15
          &sort=created:asc
          &client_id=${id}&client_secret=${secret}`
      );

      const profile = await profileResponse.json();
      const repos = await repoResponse.json();
      this.setState({
        profile,
        repos,
        inputEntered: true
      });
    }
  }

  render() {
    const search = _.debounce(term => {
      this.inputSearch(term);
    }, 300);

    const { profile, repos, inputEntered } = this.state;

    const inputNull =
      (profile.length === 0 || profile.message === "Not Found") &&
      (repos.length === 0 || repos.message === "Not Found");

    const inputEnteredButNoUser =
      inputEntered === true &&
      profile.message === "Not Found" &&
      repos.message === "Not Found";


    return (
      <div className="container">
        <SearchBar onSearchTermChange={search} />
        {!inputNull && <ProfileSection profile={this.state.profile} />}
        {inputEnteredButNoUser && <ErrorPage/>}
        {!inputNull && <RepoSection repos={this.state.repos} />}
        <Footer />
      </div>
    );
  }
}

export default App;
