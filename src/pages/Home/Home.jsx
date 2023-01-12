import { useEffect, useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { getTrendingMovie } from 'service/api';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovie().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <MovieList movies={movies} />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Home;
