import React from "react";
import { connect } from "react-redux";
import { getWatchlist } from "../../actions/watchlist";
import Spinner from "react-spinkit";

export class Watchlist extends React.Component {
  componentDidMount() {
    this.props.dispatch(getWatchlist());
  }

  getWatchlistMovies() {
    const movies = this.props.watchlistMovies.map((movie, index) => {
      return (
        <li key={index}>
          <div>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
          </div>
          <button>Delete</button>
        </li>
      );
    });
    return <ul className="watchlist-results"> {movies}</ul>;
  }

  render() {
    // if (!this.props.watchlistMovies) {
    //   return <Spinner spinnername="circle" noFadeIn />;
    // }
    console.log(this.props.watchlistMovies);
    return (
      <div>
        <h1>Your Favorites</h1>
        {!this.props.watchlistMovies ? (
          <Spinner spinnername="circle" noFadeIn />
        ) : (
          <div>{this.getWatchlistMovies()} </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  watchlistMovies: state.watchlist.watchlistMovies
});

export default connect(mapStateToProps)(Watchlist);
