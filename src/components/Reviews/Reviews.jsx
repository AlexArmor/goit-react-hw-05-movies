import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/api';
import css from './Reviews.module.css';

const Reviews = () => {
  const { idMovie } = useParams();

  const [review, setReview] = useState(null);

  useEffect(() => {
    getMovieReviews(idMovie).then(data => {
      setReview(data);
    });
  }, [idMovie]);

  if (!review) {
    return;
  }
  const { results } = review;

  if (results.length === 0) {
    return <h3>No reviews</h3>;
  }

  return (
    <ul className={css.reviewList}>
      {results.map(({ author, content, id }) => (
        <li key={id} className={css.reviewItem}>
          <h3 className={css.reviewTitle}>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
