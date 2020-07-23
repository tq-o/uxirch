import React, { Component, useContext, useState, useEffect} from "react";
import "./Search.css";
import instbtn from "./img/inst-btn.png";
import Answer from './Answer';
import {Transition} from 'react-spring/renderprops';
import './foo.json';
import TimeDisplay from "./Time";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // cat1: "grapefruit",
      // cat2: "grapefruit",
      // cat3: "grapefruit",
      cat: {
        cat1: "grapefruit",
        cat2: "grapefruit",
        cat3: "grapefruit",
      },
      resultOpen: false,
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
  
    // writeJsonFile('foo.json', {"foo": true});
    
    event.preventDefault();
  }

  mouseOver(event) {
    alert("Hi");
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
              
      

            </form>

            <div>
                {/* {
                  // this.state.resultOpen ? <form 
                  //                           className = "answer2" isOpen = {this.state.resultOpen}
                                             
                  //                         >
                  //                         </form> : null
                  this.state.resultOpen? <Answer/>:null
                } */}
                <Transition
                  items={this.state.resultOpen}
                  from={{ opacity: 0 }}
                  enter={{ opacity: 1 }}
                  leave={{ opacity: 0 }}>
                  {show => show && (props => <div style={props}><from className = "answer2"></from><Answer/></div>)}
                </Transition>
                <TimeDisplay/>
                <button onClick={()=>
                  {this.setState({resultOpen:!this.state.resultOpen})}} class="answerButton">Toggle Me
                </button>

            </div>

            


                
          </div>


          

      </body>
    );
  }
}

export default Search;