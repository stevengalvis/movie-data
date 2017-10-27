import { SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_ERROR } from "../actions/search";

const initialState = {
  titles: [],
  error: null
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_MOVIES_SUCCESS":
      return Object.assign({}, state, {
        titles: action.movies
      });
    case "SEARCH_MOVIES_ERROR":
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}
