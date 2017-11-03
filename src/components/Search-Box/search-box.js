import React from "react";
import { connect } from "react-redux";
import Spinner from "react-spinkit";
import { searchMovies } from "../../actions/search";

export class SearchBox extends React.Component {
  renderResults() {
    if (this.props.loading) {
      return <Spinner spinnerName="circle" noFadeIn />;
    }

    if (this.props.error) {
      return <strong>{this.props.error}</strong>;
    }
    const movies = this.props.movies.map((movie, index) => <li key={index}>{movie}</li>);

    return <ul className="movie-search-results">{movies}</ul>;
  }

  search(e) {
    console.log(this);
    e.preventDefault();
    if (this.input.value.trim() === "") {
      return;
    }
    this.props.dispatch(searchMovies(this.input.value));
  }

  render() {
    return (
      <div className="movie-search">
        <form onSubmit={e => this.search(e)}>
          <input type="search" ref={input => (this.input = input)} />
          <button>Search</button>
        </form>
        <div className="movie-search-results">{this.renderResults()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.search.titles,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(SearchBox);
