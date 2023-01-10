import axios from 'axios';

const instanceMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'ac6b50378fc1527039a44b66874fdaf7',
  },
});

export const getTrendingMovie = async () => {
  const { data } = await instanceMovie.get('/trending/movie/day', {
    params: {
      page: 1,
    },
  });
  return data;
};

export const getMovieByQuery = async query => {
  const { data } = await instanceMovie.get('/search/movie', {
    params: {
      query,
    },
  });
  return data;
};

export const getMovieById = async movie_id => {
  const { data } = await instanceMovie.get(`/movie/${movie_id}`);
  return data;
};

export const getMovieCredits = async movie_id => {
  const { data } = await instanceMovie.get(`/movie/${movie_id}/credits`);
  return data;
};

export const getMovieReviews = async movie_id => {
  const { data } = await instanceMovie.get(`/movie/${movie_id}/reviews`);
  return data;
};
