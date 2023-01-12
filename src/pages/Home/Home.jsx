import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'service/api';
import { MovieList } from 'components/MovieList/MovieList';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovie().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <div className={css.trendingBlock}>
      <h2 className={css.title}>Trending today</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
