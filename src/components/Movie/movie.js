import React from "react";
import { connect } from "react-redux";

// TODO: Break this up into smaller components

const Movie = () => (
  <div>
    {/*search component should go here */}
    <h1>Movie Data</h1>
    <div>
      <h2>Movie Title</h2>
      <img>Image of Movie</img>
      <p>Movie description</p>
      <div>
        <ul>
          <li>Movie Rating</li>
          <li>Movie Release Date</li>
          <li>Movie Budget</li>
          <li>Movie Length</li>
        </ul>
      </div>
      <button>Add to favorites</button>
    </div>
  </div>
);

export default Movie;
