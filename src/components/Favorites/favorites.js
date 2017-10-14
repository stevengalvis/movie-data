import React from "react";
import { connect } from "react-redux";

const Favorites = () => (
  // search component should go here
  // break this into smaller components
  <div>
    <h1>Your Favorites</h1>
    <ul>
      <li>
        <div>
          <h2>Movie Title</h2>
          <p> short description</p>
          <img>Image of Movie</img>
          <button>Remove from favorites button</button>
        </div>
      </li>
    </ul>
  </div>
);

export default Favorites;
