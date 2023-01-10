import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="trandingMovies" element={<TrandingMovies />} />
      <Route path="movies" element={<SearchMovies />} />
      <Route path="movies/:idMovie" element={<MovieDetails />} />
    </Routes>
  );
};
