
import React, { useState } from 'react';
import './App.css';
import Counter from './components/counter';
import SearchForm from './components/searchForm';
import MoviesList from './components/Movies/MovieList';
import './index.css';
import './components/Header/header.css';
import SortAndGenreControl from './components/SortAndGenreControl/SortAndGenreControl';
import Dialog from './components/Dialog'; 
import MovieForm from './components/MovieForm';

function App() {

const [selectedGenre, setSelectedGenre] = useState(null);
const [currentSort, setCurrentSort] = useState('releaseDate');
const [movieData, setMovieData] = useState(null);

const handleSearch = (query) => {
  alert(`Performing a search for your movie: ${query}`);
};

const handleMovieFormSubmit = (data) => {
  alert(`Submiting data: ${data}`);
};

const handleGenreSelect = (genre) => {
  setSelectedGenre(genre);
  alert(`Performing a search for selected genre: ${genre}`);
};

const handleSortChange = (sortOption) => {
  setCurrentSort(sortOption);
  alert(`Sorted By: ${sortOption}`);
};
const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="div-container">
    <button className="add-movie-button" onClick={openDialog}>Add Movie</button>
    {isDialogOpen && (
      <Dialog title="ADD MOVIE" onClose={closeDialog}>
        <MovieForm initialMovie={movieData} onSubmit={(data) => handleMovieFormSubmit(data)} />
      </Dialog>
    )}     
 <Counter initialValue={10} />
      <SearchForm initialSearchQuery="What do you want to watch?" onSearch={handleSearch} />
      <SortAndGenreControl
        genres={['All', 'Documentary', 'Comedy', 'Horror', 'Crime', 'Action']}
        selectedGenre={selectedGenre}
        onSelect={handleGenreSelect}
        currentSort={currentSort}
        onSortChange={handleSortChange}
      />
      <br />
      <MoviesList onMovieEdit={openDialog} /> {/* Pass the openDialog function to the MoviesList */}
      <br />
    </div>
);
}

export default App;
