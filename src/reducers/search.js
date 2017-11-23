import {
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
  UPDATE_MOVIE_TITLES,
  CLEAR_SEARCH_TITLES
} from "../actions/search";

const initialState = {
  movies: [],
  titles: [],
  error: null,
  searchAnywhere: false,
  searchAnywhereMovieId: null
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies
      };

    case "SEARCH_ANYWHERE":
      return {
        ...state,
        searchAnywhere: true,
        searchAnywhereMovieId: action.movieId,
        movies: []
      };
    case UPDATE_MOVIE_TITLES:
      console.log(action);
      return Object.assign({}, state, {
        titles: action.titles
      });

    case SEARCH_MOVIES_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}
