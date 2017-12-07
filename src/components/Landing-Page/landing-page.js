import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./landing-page.css";
import backdrop from "../../avengers-backdrop.jpg";
import SimilarMoviesChart from "../../similar-movies-chart.png";
import movieNumbersChart from "../../movie-numbers.png";

export const LandingPage = props => {
  if (props.loggedIn) {
    return <Redirect to="/movie" />;
  }
  return (
    <div className="landing-page">
      <div className="nav-bar">
        <ul className="nav-bar-container">
          <li>
            <button className="register-btn">
              <Link to="/register" className="nav-bar-link">
                Register
              </Link>
            </button>
          </li>
          <li>
            <button className="login-btn">
              <Link to="/login" className="nav-bar-link">
                Log in / Demo Account
              </Link>
            </button>
          </li>
        </ul>
      </div>
      <div className="banner-container">
        <img className="responsive-image banner-image" src={backdrop} alt="" />
        <div className="banner-content-container">
          <h2 className="banner-text">Movie Data Analytics</h2>
          <p className="banner-info">Get popular movie data and create a watchlist</p>
        </div>
      </div>
      <div className="similar-movies-about-container">
        <div className="similar-movies-about-text">
          <h2>Compare Similar Movies User Score</h2>
          <p>Get a chart of similar movies based on kewyords and genres from The Movie DB</p>
        </div>
        <img src={SimilarMoviesChart} className="similar-movies-image responsive-image" alt="" />
      </div>
      <div className="movie-numbers-about-container">
        <img src={movieNumbersChart} className="movie-numbers-image responsive-image" alt="" />
        <div className="movie-numbers-about-text">
          <h2>Analyze Box Office numbers</h2>
          <p>View bar charts containing key financial data like budget and revenue </p>
        </div>
      </div>
      <div className="footer-container">
        <footer>Made by Steven Galvis</footer>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
