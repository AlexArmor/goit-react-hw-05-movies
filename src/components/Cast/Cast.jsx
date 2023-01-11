import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { idMovie } = useParams();

  return <div>Cast</div>;
};
