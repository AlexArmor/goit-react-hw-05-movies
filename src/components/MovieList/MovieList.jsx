import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(({ name, title, id }) => (
          <li key={id} className={css.trendingItem}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <p>{name ?? title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
