import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from 'service/api';

const MovieDetails = () => {
  const location = useLocation();
  const { idMovie } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(idMovie).then(data => {
      setMovie(data);
    });
  }, [idMovie]);
  if (!movie) {
    return;
  }
  return (
    <>
      <Link to={location.state?.from ?? '/'}>Go back</Link>
      <img
        src={
          movie.backdrop_path
            ? 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path
            : 'https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg'
        }
        alt={movie.title}
      />
      <div>
        <h2>{movie.title}</h2>
        <p>vote average: {movie.vote_average}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genres.map(({ name }) => name).join(' ')}</p>
      </div>
      <ul>
        <li>
          <Link to="credits">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
