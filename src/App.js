import React from 'react';
import MovieListPage from './components/MovieListPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<MovieListPage />} />
   <Route path="/:movieIdParam" element={<MovieListPage />} />
    </Routes>
  </Router>
  );
}

export default App;