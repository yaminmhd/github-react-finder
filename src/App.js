import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ProfileSection from "./components/ProfileSection";

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

  async inputSearch(term){
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
    return (
      <div className="container">
        <SearchBar onSearchTermChange={term => this.inputSearch(term)} />
        <ProfileSection profile={this.state.profile} />
        {/*<input
          type="text"
          placeholder="Enter a username"
          value={this.state.enteredUser.name}
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn btn-primary" onClick={this.getUser.bind(this)}>
          Get User Details
        </button>
        <User user={user} />*/}
      </div>
    );
  }
}

export default App;
