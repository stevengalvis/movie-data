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
  return {
    type: UPDATE_SUGGESTIONS,
    suggestions,
    value
  };
};

export const UPDATE_MOVIES = "UPDATE_MOVIES";
export const updateMovies = movies => {
  return {
    type: UPDATE_MOVIES,
    movies
  };
};

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
    .then(movies => dispatch(getSuggestions(value, movies)))
    .catch(error => dispatch(loadSuggestionsError(error)));
};

export const getSuggestions = (value, movies) => dispatch => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  const suggestions =
    inputLength === 0 ? [] : movies.filter(suggestion => suggestion.toLowerCase().slice(0, inputLength) === inputValue);

  dispatch(updateSuggestions(suggestions, value));
};
