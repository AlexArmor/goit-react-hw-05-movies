import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'service/apiMovie';
import { MovieList } from 'components/MovieList/MovieList';

export const TrandingMovies = () => {
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
