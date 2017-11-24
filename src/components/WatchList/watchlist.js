import React from "react";
import { connect } from "react-redux";
import { getWatchlist, deleteMovie } from "../../actions/watchlist";
import Spinner from "react-spinkit";
import "./watchlist.css";

export class Watchlist extends React.Component {
  componentDidMount() {
    this.props.dispatch(getWatchlist());
  }

  deleteMovie(movie) {
    this.props.dispatch(deleteMovie(movie));
  }

  getWatchlistMovies() {
    const movies = this.props.watchlistMovies.map((movie, index) => {
      return (
        <li className="watchlist-card" key={index}>
          <h3 className="watchlist-card-movie-title">{movie.title}</h3>
          <img className="watchlist-card-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
          <button className="delete-card-btn" onClick={() => this.deleteMovie(movie)}>
            Delete
          </button>
        </li>
      );
    });
    return <ul className="watchlist-container"> {movies}</ul>;
  }

  render() {
    if (this.props.movieDeleted) {
      this.props.dispatch(getWatchlist());
    }
    return (
      <div className="watchlist-dashboard">
        <h1>Your Favorites</h1>
        {!this.props.watchlistMovies ? (
          <Spinner spinnername="circle" noFadeIn />
        ) : (
          <div className="watchlist">{this.getWatchlistMovies()} </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  watchlistMovies: state.watchlist.watchlistMovies,
  movieDeleted: state.watchlist.movieDeleted
});

export default connect(mapStateToProps)(Watchlist);
