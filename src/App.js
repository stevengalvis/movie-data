import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/Landing-Page/landing-page";
import Movie from "./components/Movie/movie";
import Favorites from "./components/Favorites/favorites";
import Register from "./components/Registration/registration-form";
import SearchBox from "./components/Search-Box/search-box";
import Suggestions from "./components/AutoSuggest/autosuggest";
import { refreshAuthToken } from "./actions/auth";

class App extends Component {
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
          <header className="App-header">
            <h1 className="App-title">Movie Data</h1>
          </header>
          <SearchBox />
          <Suggestions />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/movie" component={Movie} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
