import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "react-spinkit";
import DoughnutChart from "../Chart/doughnutchart";
import BarChart from "../Chart/barchart";
import { updateCard } from "../../actions/card";
import { updateSimilarMovies } from "../../actions/card";
import { addToWatchlist } from "../../actions/card";
import "./card.css";

export class Card extends React.Component {
  componentDidMount() {
    this.props.dispatch(updateCard(this.props.movieId));
    this.props.dispatch(updateSimilarMovies(this.props.movieId));
  }

  renderGenres() {
    const genres = this.props.movie.genres.map((genre, index) => <li key={index}>{genre.name}</li>);
    return <ul className="genres-results">{genres}</ul>;
  }

  onWatchlistClicked() {
    addToWatchlist(this.props.movie);
  }

  render() {
    if (!this.props.movie) {
      return <Spinner spinnername="circle" noFadeIn />;
    }

    return (
      <div className="card-container">
        <div className="card-header">
          <h2>{this.props.movie.title}</h2>
          <div className="card-poster-image">
            <img src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`} alt="" />
          </div>
        </div>
        <div className="card-description">
          <h3>{this.props.movie.tagline}</h3>
          <p>{this.props.movie.overview}</p>
        </div>
        <div className="card-info">
          <ul className="card-info-list">
            <li>Release Date: {this.props.movie.release_date}</li>
            <li>Minutes: {this.props.movie.runtime}</li>
            <li>Genres: {this.renderGenres()}</li>
          </ul>
        </div>
        <button className="add-movie-btn" onClick={() => this.onWatchlistClicked()}>
          Add to Watchlist
        </button>
        <DoughnutChart />
        <BarChart type="movieNumbers" />
        {this.props.isLoading ? <Spinner spinnername="circle" noFadeIn /> : <BarChart type="similarMovies" />}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    movieId: props.match.params.movieId,
    movie: state.card.movie,
    similarMovies: state.card.similarMovies,
    isLoading: state.card.isLoading
  };
};

export default connect(mapStateToProps)(Card);
