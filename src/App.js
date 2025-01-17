
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import SearchForm from './components/searchForm';
import GenreSelect from './components/genreSelect';
import MovieList from './components/MoviesList/movieslist';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function App() {

const genres = ['All', 'Action', 'Romance', 'Horror' , 'Adventure', 'Comedy', 'Drama'];
const [selectedGenre, setSelectedGenre] = useState('All');

const handleSearch = (query) => {
  alert(`Performing a search for your movie: ${query}`);
};

const handleGenreSelect = (genre) => {
  setSelectedGenre(genre);
  alert(`Performing a search for selected genre: ${genre}`);
};

  return (
    <div className="App">
      <Counter initialValue={5} />
      <h1>FIND YOUR MOVIE</h1>
      <SearchForm initialQuery="golmaal3" onSearch={handleSearch} />
      <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={handleGenreSelect} />
      <div><MovieList/></div>    
    </div>
  );
}

export default App;
