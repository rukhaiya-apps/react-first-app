import React, { Component } from "react";

class GenreSelect extends Component {
  handleSelect = (genre) => {
    this.props.onSelect(genre);
  };

  render() {
    const { genres, selectedGenre } = this.props;

    return React.createElement(
      "div",
      null,
      genres.map((genre) =>
        React.createElement(
          "button",
          {
            key: genre,
            onClick: () => this.handleSelect(genre),
            style: {
              backgroundColor: genre === selectedGenre ? "blue" : "white",
              color: genre === selectedGenre ? "white" : "black",
              padding: "10px 20px",
              margin: "5px",
              border: "1px solid #ccc",
              cursor: "pointer",
            },
          },
          genre
        )
      )
    );
  }
}

export default GenreSelect;
