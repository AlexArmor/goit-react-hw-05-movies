import { Routes, Route } from 'react-router-dom';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Home } from 'pages/Home/Home';
import { AppBar } from './AppBar/AppBar.jsx';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:idMovie" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};
