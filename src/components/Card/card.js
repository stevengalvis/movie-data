import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "react-spinkit";
import { updateCard } from "../../actions/card";

export class Card extends React.Component {
  componentDidMount() {
    this.props.dispatch(updateCard(this.props.movieId));
  }

  render() {
    if (!this.props.movie) {
      return <Spinner spinnerName="circle" noFadeIn />;
    }

    return (
      <div>
        <h1>Movie Data</h1>
        <div>
          <h2>{this.props.movie.title}</h2>
          <h3>{this.props.movie.tagLine}</h3>
          <img src={this.props.movie.posterImg} alt="" />
          <p>{this.props.movie.overview}</p>
          <div>
            <ul>
              <li>{this.props.movie.budget}</li>
              <li>{this.props.movie.voteAverage}</li>
              <li>{this.props.movie.budget}</li>
              <li>{this.props.movie.revenue}</li>
              <li>{this.props.movie.popularity}</li>
              <li>{this.props.movie.runtime}</li>
            </ul>
          </div>
          <Link to={"/favorites"}>See Favorites</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    movieId: props.match.params.movieId,
    movie: state.card.movie
  };
  // let movie = {};
  // state.search.movies.map(_movie => {
  //   if (_movie.id == movieId) {
  //     movie = _movie;
  //     console.log(movie);
  //   }
  // });
  // return {
  //   movieId,
  //   movie
  // };
};

export default connect(mapStateToProps)(Card);
