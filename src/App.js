import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/Landing-Page/landing-page";
import Movie from "./components/Movie/movie";
import Favorites from "./components/Favorites/favorites";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/movie" component={Movie} />
          <Route exact path="/favorites" component={Favorites} />
        </div>
      </Router>
    );
  }
}

export default App;
