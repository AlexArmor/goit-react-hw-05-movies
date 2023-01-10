import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'service/api';

export const MovieDetails = () => {
  const { idMovie } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(idMovie).then(data => {
      console.log(data);
      setMovie(data);
    });
  }, [idMovie]);
  if (!movie) {
    return;
  }
  return (
    <>
      <img
        src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
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
    </>
  );
};
