import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(({ name, title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <p>{name ?? title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
