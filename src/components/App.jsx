import { Routes, Route } from 'react-router-dom';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Home } from 'pages/Home/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId/*" element={<MovieDetails />} />
    </Routes>
  );
};
