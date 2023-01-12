import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './PageNotFound404.module.css';

function PageNotFound404() {
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timerId);
  }, [navigate]);

  return (
    <div>
      <p className={css.error}>Page not Found!</p>
    </div>
  );
}

export default PageNotFound404;
