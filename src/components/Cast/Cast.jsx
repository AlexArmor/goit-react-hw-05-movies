import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/api';

const Cast = () => {
  const { idMovie } = useParams();

  const [castIng, setCast] = useState(null);

  useEffect(() => {
    getMovieCredits(idMovie).then(data => {
      setCast(data);
    });
  }, [idMovie]);

  if (!castIng) {
    return;
  }
  const { cast } = castIng;
  return (
    <ul>
      {cast.map(({ name, character, profile_path, id }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? 'https://image.tmdb.org/t/p/w200' + profile_path
                : 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'
            }
            alt={name}
          />
          <p>{name}</p>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
