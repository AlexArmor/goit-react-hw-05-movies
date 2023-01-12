import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'service/api';
import { MovieList } from 'components/MovieList/MovieList';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieName) return;

    setSearchQuery(movieName);
    getMovieByQuery(movieName).then(({ results }) => {
      setMovies(results);
    });
  }, [movieName]);

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
  };

  return (
    <div className={css.formSection}>
      <form onSubmit={onFormSubmit}>
        <input
          className={css.inputSearch}
          name="name"
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button type="submit" className={css.btnSearch}>
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};
export default Movies;
