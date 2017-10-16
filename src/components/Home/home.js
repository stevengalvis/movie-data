import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    {/*search component should go here */}
    <h1>Movie Data</h1>
    <h2>fun movie analytics</h2>
    <img alt="" />
    <div>
      <ul>
        <li>Icon 1</li>
        <li>Icon 2</li>
        <li>Icon 3</li>
      </ul>
    </div>
    <form>
      Sign up
      <button>
        <Link to="/movie">Get Started</Link>
      </button>
    </form>
    <footer>Made by Steven Galvis</footer>
  </div>
);

export default Home;
