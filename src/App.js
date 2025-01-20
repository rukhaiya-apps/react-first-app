
import React, { useState } from 'react';
import './App.css';
import Counter from './components/counter';
import SearchForm from './components/searchForm';
import MoviesList from './components/Movies/MovieList';
import './index.css';
import './components/Header/header.css';
import SortAndGenreControl from './components/SortAndGenreControl/SortAndGenreControl';

function App() {

const [selectedGenre, setSelectedGenre] = useState(null);
const [currentSort, setCurrentSort] = useState('releaseDate');

const handleSearch = (query) => {
  alert(`Performing a search for your movie: ${query}`);
};

const handleGenreSelect = (genre) => {
  setSelectedGenre(genre);
  alert(`Performing a search for selected genre: ${genre}`);
};

const handleSortChange = (sortOption) => {
  setCurrentSort(sortOption);
  alert(`Sorted By: ${sortOption}`);
};

  return (
    <div className="div-container">
      <Counter initialValue={5} />
      <SearchForm initialSearchQuery="What do you want to watch?" onSearch={handleSearch} />
      <SortAndGenreControl
        genres={['All', 'Documentary', 'Comedy', 'Horror', 'Crime']}
        selectedGenre={selectedGenre}
        onSelect={handleGenreSelect}
        currentSort={currentSort}
        onSortChange={handleSortChange}
      />
      <br />
      <MoviesList />
      <br />   
    </div>
  );
}

export default App;
