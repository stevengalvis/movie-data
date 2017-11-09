import { SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_ERROR } from "../actions/search";

const initialState = {
  movies: [],
  titles: [],
  error: null
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_MOVIES_SUCCESS":
      console.log(action.movies);
      return Object.assign({}, state, {
        movies: action.movies,
        titles: action.movies.map(movie => {
          const { title, id } = movie;
          return {
            title,
            id
          };
        })
      });
    case "SEARCH_MOVIES_ERROR":
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}
