import {
  UPDATE_INPUT_VALUE,
  UPDATE_SUGGESTIONS,
  CLEAR_SUGGESTIONS,
  LOAD_SUGGESTIONS_ERROR,
  LOAD_SUGGESTIONS_BEGIN,
  UPDATE_MOVIES
} from "../actions/autosuggest";

const initialState = {
  value: "",
  movies: [],
  suggestions: [],
  isLoading: false,
  error: null
};

const autoSuggestReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT_VALUE:
      return Object.assign({
        state,
        value: action.value
      });
    case CLEAR_SUGGESTIONS:
      return Object.assign({
        state,
        suggestions: []
      });

    case LOAD_SUGGESTIONS_BEGIN:
      return Object.assign({
        state,
        isLoading: true
      });

    case UPDATE_MOVIES:
      return Object.assign({
        state,
        movies: action.movies
      });

    case UPDATE_SUGGESTIONS:
      if (action.value !== state.value) {
        return Object.assign({
          state,
          isLoading: false
        });
      }
      return Object.assign({
        state,
        suggestions: action.suggestions,
        isLoading: false
      });

    case "LOAD_SUGGESTIONS_ERROR":
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state;
  }
};

export default autoSuggestReducer;
