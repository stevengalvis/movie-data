import { search } from "../movies";

export const UPDATE_INPUT_VALUE = "UPDATE_INPUT_VALUE";
export const updateInputValue = value => {
  return {
    type: UPDATE_INPUT_VALUE,
    value
  };
};

export const CLEAR_SUGGESTIONS = "CLEAR_SUGGESTIONS";
export const clearSuggestions = () => ({
  type: CLEAR_SUGGESTIONS
});

export const UPDATE_SUGGESTIONS = "UPDATE_SUGGESTIONS";
export const updateSuggestions = (suggestions, value) => {
  console.log("here");
  console.log(suggestions, value);
  return {
    type: UPDATE_SUGGESTIONS,
    suggestions,
    value
  };
};

export const UPDATE_MOVIES = "UPDATE_MOVIES";
export const updateMovies = movies => ({
  type: UPDATE_MOVIES,
  movies
});

export const LOAD_SUGGESTIONS_BEGIN = "LOAD_SUGGESTIONS_BEGIN";
export const loadSuggestionsBegin = () => ({
  type: LOAD_SUGGESTIONS_BEGIN
});

export const LOAD_SUGGESTIONS_ERROR = "LOAD_SUGGESTIONS_ERROR";
export const loadSuggestionsError = error => ({
  type: LOAD_SUGGESTIONS_ERROR,
  error
});

export const loadMovies = value => dispatch => {
  return search(value)
    .then(movies => dispatch(updateMovies(movies)))
    .catch(error => dispatch(loadSuggestionsError(error)));
};
