import React from "react";
import { connect } from "react-redux";
import Autosuggest from "react-autosuggest";

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] :
}
