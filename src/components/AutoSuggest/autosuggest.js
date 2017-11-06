import React from "react";
import { connect } from "react-redux";
import Autosuggest from "react-autosuggest";
import { search } from "../../movies";
import { loadMovies, clearSuggestions, updateInputValue, updateSuggestions } from "../../actions/autosuggest";

export class Suggestions extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.loadSuggestions = this.loadSuggestions.bind(this);
  }

  loadSuggestions(value) {
    return this.props.dispatch(loadMovies(value)).then(movies => {
      this.props.dispatch(updateSuggestions(this.getSuggestions(value, movies), value));
    });
  }

  onSuggestionsFetchRequested({ value }) {
    this.loadSuggestions(value);
  }

  onSuggestionsClearRequested() {
    this.props.dispatch(clearSuggestions());
  }

  onChange(event, { newValue }) {
    this.props.dispatch(updateInputValue(newValue));
  }

  getSuggestions = (value, movies) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : movies.filter(suggestion => suggestion.toLowerCase().slice(0, inputLength) === inputValue);
  };

  getSuggestionValue = suggestion => suggestion;

  renderSuggestion = suggestion => <div>{suggestion}</div>;

  render() {
    const inputProps = {
      placeholder: "Search for a movie",
      value: this.props.value,
      onChange: this.onChange
    };
    return (
      <div>
        <Autosuggest
          suggestions={this.props.suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  value: state.autosuggest.value,
  movies: state.autosuggest.movies,
  suggestions: state.autosuggest.suggestions,
  isLoading: state.autosuggest.isLoading,
  error: state.autosuggest.error
});

export default connect(mapStateToProps)(Suggestions);
