import { getMovie, getSimilarMovies } from "../movies";
import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

export const RENDER_CARD = "RENDER_CARD";
export const renderCard = movie => ({
  type: RENDER_CARD,
  movie
});

export const RENDER_CARD_ERORR = "RENDER_CARD_ERORR";
export const renderCardError = error => ({
  type: RENDER_CARD_ERORR,
  error
});

export const RENDER_SIMILAR_MOVIES = "RENDER_SIMILAR_MOVIES";
export const renderSimilarMovies = movies => {
  return {
    type: RENDER_SIMILAR_MOVIES,
    movies
  };
};

export const addToWatchlist = movie => {
  const token = localStorage.getItem("authToken");
  return fetch(`${API_BASE_URL}/users/watchlist`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(movie)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(watchlist => {
      return watchlist;
    })
    .catch(err => {
      const { message } = err;
      return Promise.reject(message);
    });
};

export const updateCard = movieId => dispatch => {
  getMovie(movieId).then(movie => {
    dispatch(renderCard(movie));
  });
};

export const updateSimilarMovies = movieId => dispatch => {
  getSimilarMovies(movieId).then(movies => {
    dispatch(renderSimilarMovies(movies.results.slice(0, 5)));
  });
};
