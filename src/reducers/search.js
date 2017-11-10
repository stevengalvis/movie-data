import { SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_ERROR, UPDATE_MOVIE_TITLES } from "../actions/search";

const initialState = {
  movies: [],
  titles: [],
  error: null
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies
      };
    // return Object.assign({}, state, {
    //   movies: action.movies,
    //   titles: action.movies.map(movie => {
    //     const { title, id } = movie;
    //     return {
    //       title,
    //       id
    //     };
    //   })
    // });
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
