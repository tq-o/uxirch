import React, { Component } from "react";
import "./App.css";
import instbtn from "./img/inst-btn.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat1: "coconut",
      cat2: "coconut",
      cat3: "coconut",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
  }

  handleChange(event) {
    // this.setState({cat1: event.target.value});
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "Your favorite flavor is: " +
        this.state.cat1 +
        "," +
        this.state.cat2 +
        "," +
        this.state.cat3
    );
    event.preventDefault();
  }

  mouseOver(event) {
    alert("Hi");
  }

  render() {
    return (
      <body>
        {/* <div className="rectangle" /> */}
        <button className="button sign-out">
          <span>sign out</span>
        </button>
        <button className="button home">home</button>
        <button className="button list">list</button>
          <div className="rectangle">
            <img
              className="btn"
              onMouseOver={this.mouseOver}
              src={instbtn}
              alt="loading"
            ></img>
            <form onSubmit={this.handleSubmit}>
              <label className="cat1">
                Category 1:
                <select
                  name="cat1"
                  cat1={this.state.cat1}
                  onChange={this.handleChange}
                >
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </label>

              <label className="cat2">
                Category 2:
                <select
                  name="cat2"
                  cat2={this.state.cat2}
                  onChange={this.handleChange}
                >
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </label>
              <label className="cat3">
                Category 3:
                <select
                  name="cat3"
                  cat3={this.state.cat3}
                  onChange={this.handleChange}
                >
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </label>
              <input className="submit" type="submit" value="Submit" />
              <text className="disclaimer">Disclaimer: We love sloths</text>
            </form>
          </div>
      </body>
    );
  }
}

export default App;
