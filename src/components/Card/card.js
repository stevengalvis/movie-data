import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "react-spinkit";
import DoughnutChart from "../Chart/doughnutchart";
import BarChart from "../Chart/barchart";
import { updateCard } from "../../actions/card";
import { updateSimilarMovies } from "../../actions/card";
import { addToWatchlist } from "../../actions/card";

export class Card extends React.Component {
  componentDidMount() {
    this.props.dispatch(updateCard(this.props.movieId));
    this.props.dispatch(updateSimilarMovies(this.props.movieId));
  }

  renderGenres() {
    const genres = this.props.movie.genres.map((genre, index) => <li key={index}>{genre.name}</li>);
    return <ul className="genres-results">{genres}</ul>;
  }

  onFavoritesClicked() {
    addToWatchlist(this.props.movie);
  }

  render() {
    if (!this.props.movie) {
      return <Spinner spinnername="circle" noFadeIn />;
    }

    return (
      <div>
        <h1>Movie Data</h1>
        <div>
          <h2>{this.props.movie.title}</h2>
          <h3>{this.props.movie.tagLine}</h3>
          <img src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`} alt="" />
          <p>{this.props.movie.overview}</p>
          <div>
            <ul>
              <li>Budget: {this.props.movie.budget}</li>
              <li>Vote Average: {this.props.movie.vote_average}</li>
              <li>Revenue: {this.props.movie.revenue}</li>
              <li>Popularity: {this.props.movie.popularity}</li>
              <li>Minutes: {this.props.movie.runtime}</li>
              <li>Genres: {this.renderGenres()}</li>
            </ul>
          </div>
          <button onClick={() => this.onFavoritesClicked()}>Add to Favorites</button>
          <Link to={"/watchlist"}>See Watchlist</Link>
        </div>
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
