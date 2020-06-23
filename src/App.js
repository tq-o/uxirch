import React, { Component } from "react";
// import "./App.css";
import Search from "./Search";
import Login from "./Login"
// import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component = {Login}/>
        <Route exact path="/search" component={Search} />
      </Router>
    );
  }
}

export default App;
