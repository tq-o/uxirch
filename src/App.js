import React, { Component } from 'react'
import './App.css';

import apple from './apple';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


import button from './img/forgot-password-button.png';
import circle from './img/circle.png';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {userN: '', userP: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
   }

  handleSubmit(event) {
    alert('your username: ' + this.state.userN + 'your password: ' + this.state.userP );
    event.preventDefault();
   }


  render(){
    return (

      <Router>
      <Route exact path="/" render={(props) => (
      <React.Fragment>

      <body>
      
      <div className = "container">
        
        <img className = "circleImage" src = {circle} alt="alternatetext"></img>

        <a style = {{backgroundColor: 'transparent', border: 'none'}}href="">
        <img className = "image" src = {button} alt="alternatetext"></img>
        </a>

        <form onSubmit = {this.handleSubmit}> 

        <input 
        name = "userN"
        userN = {this.state.userN}
        onChange = {this.handleChange}
        className = "enterUserName" 
        placeholder = "username">
        </input>

        <input 
        name = "userP"
        userP = {this.state.userP}
        onChange = {this.handleChange}
        className = "enterPassword" 
        placeholder = "password">
        </input>

        <Link to="/apple">
        <button 
        type = "submit"
        className = "button sign-in">sign in
        </button>
        </Link>


        </form>
        </div>
      </body>

      </React.Fragment>)} />
      <Route path ="/apple" component = {apple} />
      </Router>
      
);
}
}


export default App;