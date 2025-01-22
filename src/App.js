import React from 'react';
import MovieListPage from './components/MovieListPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/Movies/MovieDetails';


function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<MovieListPage />} />
      <Route path="/:movieId" element={<MovieDetails />} />
    </Routes>
  </Router>
  );
}

export default App;