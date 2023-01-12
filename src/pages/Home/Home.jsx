import { useEffect, useState } from 'react';
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
    </>
  );
};

export default Home;
