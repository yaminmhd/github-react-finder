import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ProfileSection from "./components/ProfileSection";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      repos: [],
      repos_count: 5,
      repos_sort: "created: asc",
      id: "0411e12b010f75a6c751",
      secret: "8e1123577ee45b8e1f24df68d24f71f286f12224"
    };
  }

  async inputSearch(term) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${term}?client_id=${
        this.state.id
      }&client_secret=${this.state.secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${term}/repos?per_page=${
        this.state.repos_count
      }&sort=${this.state.repos_sort}&client_id=${
        this.state.id
      }&client_secret=${this.state.secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    this.setState({
      profile,
      repos
    });
  }

  render() {
    const { profile, repos } = this.state;
    const inputNull =
      (profile.length === 0 || profile.message === "Not Found") &&
      (repos.length === 0 || repos.message === "Not Found");
    return (
      <div className="container">
        <SearchBar onSearchTermChange={term => this.inputSearch(term)} />
        {!inputNull && <ProfileSection profile={this.state.profile} />}
        <Footer />
      </div>
    );
  }
}

export default App;
