import React, { Component } from "react";
import "./App.css";
import _ from "lodash";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import RepoSection from "./components/RepoSection/RepoSection";
import Footer from "./components/Footer/Footer";
import {getUserData} from '../src/api';

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
      const {profile,repos} = await getUserData(term);
      this.setState({
        profile,
        repos,
        inputEntered: true
      });
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

    const search = _.debounce(term => {
      this.inputSearch(term);
    }, 300);

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
