import React, { Component } from "react";
import PropTypes from "prop-types";
import MovieImage from "./MovieImage";
import MovieInfo from "./MovieInfo";
import "./movie.css";

class MovieCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="image-container">
          <MovieImage
            toggleShowFilmBody={this.props.toggleShowFilmBody}
            img={this.props.pictureURL}
            filmTitle={this.props.name}
            film={this.props._film}
          />
        </div>
        <MovieInfo
          description={this.props.descriptionShort}
          name={this.props.name}
          year={this.props.year}
        />
      </>
    );
  }
}

MovieCard.propTypes = {
  genres: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
  pictureURL: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  _film: PropTypes.object.isRequired,
};

export default MovieCard;
