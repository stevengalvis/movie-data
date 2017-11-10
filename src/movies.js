import { MOVIE_DB_API_KEY } from "./config";
const _search = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${MOVIE_DB_API_KEY}&language=en-US&page=1&include_adult=false`
  )
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.status_message);
      }
      return res.json();
    })
    .then(data => data);
};

const _getMovie = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?&api_key=${MOVIE_DB_API_KEY}&language=en-US&page=1&include_adult=false`
  )
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.status_message);
      }
      return res.json();
    })
    .then(movie => movie);
};

export const search = query => _search(query);

export const getMovie = movieId => _getMovie(movieId);
