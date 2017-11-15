import React from "react";
import { connect } from "react-redux";

const WatchList = props => {
  const favorites = props.favorites.map((movie, index) => (
    <li key={index}>
      <div>
        <h3>{movie.title}</h3>
        <img src={movie.posterImg} alt="" />
      </div>
      <button className>Delete</button>
    </li>
  ));
  return (
    <div>
      <h1>Your Favorites</h1>
      <ul>{favorites}</ul>
    </div>
  );
};

const mapStateToProps = state => ({
  favorites: state.favorites.movies
});

export default connect(mapStateToProps)(WatchList);
