import { search } from "../movies";

export const SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS";
export const searchMoviesSuccess = movies => ({
  type: SEARCH_MOVIES_SUCCESS,
  movies
});

export const SEARCH_MOVIES_ERROR = "SEARCH_MOVIES_ERROR";
export const searchMoviesError = error => ({
  type: SEARCH_MOVIES_ERROR,
  error
});

export const searchMovies = query => dispatch => {
  search(query)
    .then(movies => dispatch(searchMoviesSuccess(movies.results.map(movie => movie.title))))
    .catch(error => dispatch(searchMoviesError(error)));
};
