import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import HeaderBar from "./components/Header-Bar/header-bar";
import LandingPage from "./components/Landing-Page/landing-page";
import Card from "./components/Card/card";
import WatchList from "./components/WatchList/watchlist";
import Register from "./components/Registration/registration-form";
import RegistrationPage from "./components/Registration/registration-page";
import LoginForm from "./components/Login/login-form";
import SearchBox from "./components/Search-Box/search-box";
import Suggestions from "./components/AutoSuggest/autosuggest";
import { refreshAuthToken } from "./actions/auth";

export class App extends Component {
  componentDidMount() {
    if (this.props.hasAuthToken) {
      // try to get a new auth token if there is one in local storage
      this.props.dispatch(refreshAuthToken());
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && !this.props.loggedIn) {
      // when logged in refresh authentication token periodically
      this.startPeriodicRefresh();
    } else if (!nextProps.loggedIn && this.props.loggedIn) {
      // stop refreshing once logged out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // one hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }
    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this.props.loggedIn ? (
            <div>
              {" "}
              <header>
                <HeaderBar />
              </header>
              <SearchBox />
            </div>
          ) : (
            ""
          )}

          {this.props.searchAnywhere ? <Redirect to={`/movie/${this.props.searchAnywhereMovieId}`} /> : ""}
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/search" component={SearchBox} />
          <Route exact path="/movie/:movieId" component={Card} />
          <Route exact path="/watchlist" component={WatchList} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegistrationPage} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
  searchAnywhere: state.search.searchAnywhere,
  searchAnywhereMovieId: state.search.searchAnywhereMovieId
});

export default connect(mapStateToProps)(App);
