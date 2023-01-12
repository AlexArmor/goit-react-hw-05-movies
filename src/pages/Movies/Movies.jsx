import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import { getMovieByQuery } from 'service/api';
import { MovieList } from 'components/MovieList/MovieList';

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
    <>
      <form onSubmit={onFormSubmit}>
        <input
          name="name"
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Movies;