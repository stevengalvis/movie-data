import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/home";
import Movie from "./components/Movie/movie";
import Favorites from "./components/Favorites/favorites";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Home />
        </div>
      </Router>
    );
  }
}

export default App;
