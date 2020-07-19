import React, { Component } from "react";
import "./Search.css";
import instbtn from "./img/inst-btn.png";
import Result from "./Result.js"

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat1: "grapefruit",
      cat2: "grapefruit",
      cat3: "grapefruit",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.openResult = this.openResult.bind(this);
    this.closeResult = this.closeResult.bind(this);
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

  openResult(event){
    this.setState({resultOpen:true})
  }

  closeResult(event){
    this.setState({resultOpen:false})
  }

  render() {
    return (
      <body className = "body2">
        {/* <div className="rectangle" /> */}
        <button className="button sign-out button2">
          <span>sign out</span>
        </button>
        <button className="button home button2">home</button>
        <button className="button list button2">list</button>
          <div className="rectangle">
            <header>Option Screen</header>

            <div className = "resultRectangle" 
              isOpen = {this.state.resultOpen}
              closeCallback = {this.closeResult.bind(this)}>
              <Result closeCallback = {this.closeResult.bind(this)}/>
            </div>

            

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
              <input className="submit button2" type="submit" value="Submit" />
              <i className="disclaimer">Disclaimer: We love sloths</i>
            </form>
          </div>
      </body>
    );
  }
}

export default Search;