import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getWatchlist, deleteMovie } from "../../actions/watchlist";
import Spinner from "react-spinkit";
import "./watchlist.css";

export class Watchlist extends React.Component {
  componentDidMount() {
    // if (!this.props.loggedIn) {
    //   return <Redirect to="/" />;
    // }
    this.props.dispatch(getWatchlist());
    document.body.style.backgroundColor = "black";
  }

  deleteMovie(movie) {
    this.props.dispatch(deleteMovie(movie));
  }

  getWatchlistMovies() {
    const movies = this.props.watchlistMovies.map((movie, index) => {
      return (
        <li className="watchlist-card" key={index}>
          <Link to={`/movie/${movie.id}`} className="watchlist-card-movie-title">
            {movie.title}
          </Link>
          <Link to={`/movie/${movie.id}`}>
            <img
              className="watchlist-card-img"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
            />{" "}
          </Link>
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
  movieDeleted: state.watchlist.movieDeleted,
  loggedIn: state.auth.currentuser !== null
});

export default connect(mapStateToProps)(Watchlist);
