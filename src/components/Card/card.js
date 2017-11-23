import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "react-spinkit";
import DoughnutChart from "../Chart/doughnutchart";
import BarChart from "../Chart/barchart";
import HorizontalBarChart from "../Chart/horizontalbarchart";
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
    const genres = this.props.movie.genres.map((genre, index) => (
      <li key={index}>
        <span className="genre-value">{genre.name}</span>
      </li>
    ));
    return <ul className="genres-results">{genres}</ul>;
  }

  onWatchlistClicked() {
    addToWatchlist(this.props.movie);
  }

  componentDidUpdate() {
    let backdropImg = "https://image.tmdb.org/t/p/original" + this.props.movie.backdrop_path;
    document.body.style.backgroundImage = "url(" + backdropImg + ")";
  }

  render() {
    if (!this.props.movie) {
      return <Spinner spinnername="circle" noFadeIn />;
    }

    return (
      <div className="card-container">
        <div className="card-poster">
          <img
            className="card-poster-image"
            src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`}
            alt=""
          />
        </div>
        <div className="card-data-container">
          <div className="card-about-container">
            <h2 class="card-title">{this.props.movie.title}</h2>
            <h3 className="card-tagline">{this.props.movie.tagline}</h3>
            <p class="card-description">{this.props.movie.overview}</p>
          </div>
          <div className="card-details-container">
            <p className="release-date">
              <span className="card-info-title">Release Date:</span>
              <span className="card-info-value">{this.props.movie.release_date}</span>
            </p>
            <p className="runtime">
              <span className="card-info-title">Minutes:</span>{" "}
              <span className="card-info-value">{this.props.movie.runtime}</span>
            </p>
          </div>
          <div className="card-panel-container">
            <div className="card-genres">
              <span className="genres-title">Genres:</span> {this.renderGenres()}
            </div>
            <DoughnutChart />
          </div>
          <div className="bar-charts-container">
            {this.props.isLoading ? <Spinner spinnername="circle" noFadeIn /> : <HorizontalBarChart />}
            <BarChart />
          </div>
          <button className="add-movie-btn" onClick={() => this.onWatchlistClicked()}>
            Add to Watchlist
          </button>
        </div>
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
