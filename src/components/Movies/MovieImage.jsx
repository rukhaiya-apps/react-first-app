import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactImageFallback from "react-image-fallback";
import placeholder from "../../images/film-poster-placeholder.png";
import "./movie.css";
import MovieDetails from "./MovieDetails";
import { useNavigate, useLocation } from "react-router-dom";

function MovieImage({ img, filmTitle, film }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    if (!showModal) {
      document.addEventListener("keydown", handleKeyPress);
    } else {
      removePathParam();
      document.removeEventListener("keydown", handleKeyPress);
    }
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 27) {
      setShowModal(false);
    }
  };
  const removePathParam = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const newPath = "/";
    const newUrl = `${newPath}?${urlParams.toString()}`;
    window.history.pushState({}, "", newUrl);
  };

  const handleMovieClick = () => {
    addPathParam();
    setShowModal(true);
  };

  const addPathParam = () => {
    const searchParams = new URLSearchParams(location.search);
    const newPath = `/${film.id}`;
    const newUrl = `${newPath}?${searchParams.toString()}`;
    // Update the URL without redirection
    window.history.pushState({}, "", newUrl);
  };

  return (
    <div>
      <ReactImageFallback
        src={img}
        fallbackImage={placeholder}
        onClick={handleMovieClick} // Updated onClick event
        title={filmTitle}
        className="filcard-image"
      />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <MovieDetails movieInfo={film} />
          </div>
        </div>
      )}
    </div>
  );
}

MovieImage.propTypes = {
  img: PropTypes.string.isRequired,
  film: PropTypes.object.isRequired,
  filmTitle: PropTypes.string.isRequired,
};

export default MovieImage;
