import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentUser, setAuthToken } from "../../actions/auth";
import { clearAuthToken } from "../../local-storage";

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
      logOutButton = <button onClick={() => this.logOut()}>Log out </button>;
      watchlistButton = <Link to={"/watchlist"}>See Watchlist</Link>;
    }
    return (
      <div className="header-bar">
        <ul>
          <li>{logOutButton}</li>
          <li>{watchlistButton}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
