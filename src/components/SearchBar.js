import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super();

    this.state = {
      searchTerm: ""
    };
  }

  render() {
    return (
      <div>
        <input
          onChange={event => this.handleInputChange(event.target.value)}
          value={this.state.searchTerm}
          type="text"
          placeholder="Enter username"
        />
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
