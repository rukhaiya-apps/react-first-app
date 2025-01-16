import React, { Component } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: props.initialQuery || "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSearch = () => {
    console.log(this.state.query);
    this.props.onSearch(this.state.query);
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleSearch();
    }
  };
  render() {
    return (
      <div className="search-form">
        <input
          type="text"
          placeholder="What do you want to watch..."
          value={this.state.query}
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyPress}
          style={{ width: "30%" }}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchForm;
