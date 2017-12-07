import React from "react";
import { connect } from "react-redux";
import Autosuggest from "react-autosuggest";
import { loadMovies, clearSuggestions, updateInputValue } from "../../actions/autosuggest";

export class Suggestions extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    // this.shouldRenderSuggestions = this.shouldRenderSuggestions.bind(this);
  }

  onSuggestionsFetchRequested({ value }) {
    this.props.dispatch(loadMovies(value));
  }

  onSuggestionsClearRequested() {
    this.props.dispatch(clearSuggestions());
  }

  onChange(event, { newValue }) {
    this.props.dispatch(updateInputValue(newValue));
  }

  getSuggestionValue = suggestion => {
    console.log(suggestion);
    return suggestion;
  };
  renderSuggestion = suggestion => {
    console.log(suggestion);
    return <span>{suggestion}</span>;
  };
  //
  // shouldRenderSuggestions(value) {
  //   console.log(value.trim());
  //   return value.trim().length > 2;
  // }
  render() {
    const { value, suggestions } = this.props;
    console.log(value);
    // const value = "f";
    // const suggestions = ["F", "F/X", "F/X2", "Fandango", "F for Fake", "Fögi Is a Bastard", "f/8"];
    console.log(suggestions);
    const inputProps = {
      placeholder: "Search for a movie",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        // shouldRenderSuggestions={this.shouldRenderSuggestions}
        inputProps={inputProps}
      />
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
