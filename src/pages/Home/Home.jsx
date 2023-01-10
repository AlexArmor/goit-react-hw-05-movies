import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'service/api';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovie().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};
