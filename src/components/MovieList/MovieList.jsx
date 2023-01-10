import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(({ name, title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              <p>{name ?? title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
