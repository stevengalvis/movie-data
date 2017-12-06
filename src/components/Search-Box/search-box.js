import React from "react";
import { connect } from "react-redux";
import Spinner from "react-spinkit";
import { Link } from "react-router-dom";
import { searchMovies, searchAnywhere } from "../../actions/search";
import "./search-box.css";

export class SearchBox extends React.Component {
  onMovieClick(movieId) {
    this.navigate(movieId);
    this.input.value = "";
  }

  navigate(movieId) {
    this.props.dispatch(searchAnywhere(movieId));
  }

  renderResults() {
    if (this.props.loading) {
      return <Spinner spinnerName="circle" noFadeIn />;
    }

    if (this.props.error) {
      return <strong>{this.props.error}</strong>;
    }

    let movies = this.props.movies.map((movie, index) => (
      <li className="search-box-title" key={index}>
        <span onClick={e => this.onMovieClick(movie.id)}>{movie.title}</span>
      </li>
    ));

    return <ul className="search-box-list">{movies}</ul>;
  }

  search(e) {
    e.preventDefault();
    if (this.input.value.trim() === "") {
      return;
    }
    this.props.dispatch(searchMovies(this.input.value));
  }

  render() {
    return (
      <div className="search-box-container">
        <form onSubmit={e => this.search(e)}>
          <input
            type="search"
            placeholder="Search Movie"
            className="search-input"
            ref={input => (this.input = input)}
          />
        </form>
        <div className="search-results" ref={searchResults => (this.searchResults = searchResults)}>
          {this.renderResults()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.search.movies,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(SearchBox);
