import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/home";
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
          <Route exact path="/" component={Home} />
          <Route exact path="/movie" component={Movie} />
          <Route exact path="/favorites" component={Favorites} />
        </div>
      </Router>
    );
  }
}

export default App;
