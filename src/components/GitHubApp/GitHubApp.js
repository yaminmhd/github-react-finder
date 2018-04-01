import React, { Component } from "react";
import "./GitHubApp.css";
import { debounce } from "lodash";
import SearchBar from "../SearchBar/SearchBar";
import ErrorPage from "../ErrorPage/ErrorPage";
import ProfileSection from "../ProfileSection/ProfileSection";
import RepoSection from "../RepoSection/RepoSection";
import Footer from "../Footer/Footer";
import { getUserData } from "../util/api";

class GitHubApp extends Component {
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
      try {
        const { profile, repos } = await getUserData(term);
        this.setState({
          profile,
          repos,
          inputEntered: true
        });
      } catch (error) {
        throw new Error("Error setting profile and repo");
      }
    }
  }

  render() {
    const { profile, repos, inputEntered } = this.state;

    const inputNull =
      (profile.length === 0 || profile.message === "Not Found") &&
      (repos.length === 0 || repos.message === "Not Found");

    const inputEnteredButNoUser =
      inputEntered === true &&
      profile.message === "Not Found" &&
      repos.message === "Not Found";

    const search = debounce(term => {
      this.inputSearch(term);
    }, 200);

    return (
      <div className="container">
        <SearchBar onSearchTermChange={search} />
        {!inputNull && <ProfileSection profile={this.state.profile} />}
        {inputEnteredButNoUser && <ErrorPage />}
        {!inputNull && <RepoSection repos={this.state.repos} />}
        <Footer />
      </div>
    );
  }
}

export default GitHubApp;
