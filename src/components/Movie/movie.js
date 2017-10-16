import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// TODO: Break this up into smaller components

class Movie extends Component {
  render() {
    console.log(this.props.movie);
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
              <li>{this.props.movie.runtime}</li>
            </ul>
          </div>
          <Link to={"/favorites"}>See Favorites</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps)(Movie);
