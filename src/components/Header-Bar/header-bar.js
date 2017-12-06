import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { setCurrentUser, setAuthToken } from "../../actions/auth";
import { clearAuthToken } from "../../local-storage";
import "./headerbar.css";

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(setCurrentUser(null));
    this.props.dispatch(setAuthToken(null));
    clearAuthToken();
  }

  render() {
    // only render the log out button if logged in
    let logOutButton;
    let watchlistButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button className="logout-btn" onClick={() => this.logOut()}>
          Log out{" "}
        </button>
      );
      watchlistButton = (
        <Link to={"/watchlist"} className="watchlist-btn">
          See Watchlist
        </Link>
      );
    }

    let loginButton = (
      <button className="login-btn" onClick={() => <Redirect to="/login" />}>
        Login
      </button>
    );

    let registerButton = (
      <button className="register-btn" onClick={() => (window.location = "/register")}>
        Register
      </button>
    );
    return (
      <div className="header-bar">
        <ul className="header-bar-container">
          <li>{!logOutButton ? loginButton : logOutButton}</li>
          <li>{!watchlistButton ? registerButton : watchlistButton}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
