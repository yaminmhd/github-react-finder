import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: ""
    };
  }

  render() {
    return (
      <div>
        <div className="card card-body mb-3">
          <h1>Find Github Users</h1>
          <p className="lead">
            Enter username to fetch a profile and repositories
          </p>
          <input
            className="form-control"
            onChange={event => this.handleInputChange(event.target.value)}
            value={this.state.searchTerm}
            type="text"
            placeholder="Enter username..."
          />
        </div>
      </div>
    );
  }

  handleInputChange(searchTerm) {
    this.setState({
      searchTerm
    });
    this.props.onSearchTermChange(searchTerm);
  }
}

export default SearchBar;
