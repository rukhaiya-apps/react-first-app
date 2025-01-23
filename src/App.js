import React from 'react';
import MovieListPage from './components/MovieListPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<MovieListPage />} />
   <Route path="/:movieIdParam" element={<MovieListPage />} />
   <Route path="/new" element={<MovieListPage />} />
   <Route path="/:movieIdForEdit/edit" element={<MovieListPage />} />
    </Routes>
  </Router>
  );
}

export default App;