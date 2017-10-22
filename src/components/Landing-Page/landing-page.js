import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import LoginForm from "../Login/login-form";

const LandingPage = props => {
  if (props.loggedIn) {
    return <Redirect to="/movie" />;
  }
  return (
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
};

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
