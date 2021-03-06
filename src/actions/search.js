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

export const UPDATE_MOVIE_TITLES = "UPDATE_MOVIE_TITLES";
export const updateMovieTitles = titles => ({
  type: UPDATE_MOVIE_TITLES,
  titles
});

export const SEARCH_ANYWHERE = "SEARCH_ANYWHERE";
export const searchAnywhere = movieId => ({
  type: SEARCH_ANYWHERE,
  movieId
});

export const searchMovies = query => dispatch => {
  let movies;
  search(query)
    .then(_movies => {
      movies = _movies.results.map(movie => movie);
      dispatch(searchMoviesSuccess(movies.slice(0, 5)));
    })
    .catch(error => dispatch(searchMoviesError(error)));
};
