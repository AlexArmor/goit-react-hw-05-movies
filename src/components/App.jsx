import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar.jsx';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const PageNotFound404 = lazy(() =>
  import('../pages/PageNotFound404/PageNotFound404.jsx')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:idMovie" element={<MovieDetails />}>
          <Route path="credits" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<PageNotFound404 />} />
      </Route>
    </Routes>
  );
};
