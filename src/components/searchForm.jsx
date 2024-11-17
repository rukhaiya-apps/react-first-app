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
    return React.createElement(
      "div",
      null,

      React.createElement("input", {
        type: "text",
        value: this.state.query,
        onChange: this.handleInputChange,
        onKeyPress: this.handleKeyPress,
        placeholder: "What do you want to watch?",
      }),

      React.createElement("button", { onClick: this.handleSearch }, "Search")
    );
  }
}

export default SearchForm;
