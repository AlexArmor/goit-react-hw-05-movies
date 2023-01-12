import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from 'service/api';
import css from './MovieDetails.module.css';
import { Loader } from '../../components/Loader/Loader';

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
    <section className={css.sectionMovieDetails}>
      <Link to={location.state?.from ?? '/'} className={css.linkBack}>
        Go back
      </Link>
      <div className={css.filmInfo}>
        <img
          className={css.imagePoster}
          src={
            movie.backdrop_path
              ? 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path
              : 'https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg'
          }
          alt={movie.title}
        />
        <ul>
          <li className={css.listItem}>
            <h2>{movie.title}</h2>
            <p>vote average: {movie.vote_average}</p>
          </li>
          <li className={css.listItem}>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </li>
          <li className={css.listItem}>
            <h3>Genres</h3>
            <p>{movie.genres.map(({ name }) => name).join(' ')}</p>
          </li>
        </ul>
      </div>
      <div className={css.addionalInfo}>
        <h3>Additional information</h3>
        <ul className={css.listInfo}>
          <li>
            <Link to="credits">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};

export default MovieDetails;
