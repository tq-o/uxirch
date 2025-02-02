import React, { Component } from "react";
import "./Login.css";
// import axios from "axios";
import { Link } from "react-router-dom";

import button from "./img/forgot-password-button.png";
import circle from "./img/circle.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { userN: "", userP: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "your username: " +
        this.state.userN +
        "your password: " +
        this.state.userP
    );
    event.preventDefault();
  }

  render() {
    return (
        <body>
        <div className="body1">
          <div className="container">
            <img className="circleImage" src={circle} alt="alternatetext"></img>

            <a
              style={{ backgroundColor: "transparent", border: "none" }}
              href=""
            >
              <img className="image" src={button} alt="alternatetext"></img>
            </a>

            <form onSubmit={this.handleSubmit}>
              <input
                name="userN"
                userN={this.state.userN}
                onChange={this.handleChange}
                className="enterUserName"
                placeholder="username"
              ></input>

              <input
                name="userP"
                userP={this.state.userP}
                onChange={this.handleChange}
                className="enterPassword"
                placeholder="password"
              ></input>

              <Link to="/search">
                <button type="submit" className="button sign-in">
                  sign in
                </button>
              </Link>
            </form>
          </div>
        </div>
      </body>
    );
  }
}

export default Login;
