import React, { Component } from 'react'
import './App.css';
// import owl from './owl.gif'
class App extends Component {
<<<<<<< Updated upstream
  render(){
    return (
      
      <body>
        {/* <div className = "container" id ="container">
          fsdfgsdgfdsfs
        </div> */}
        <button className = "button sign-out">sign out</button>
        <button className = "button home">home</button>
        <button className = "button list">list</button>


      </body>
      
=======

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

      <body>

        <div className = "container" >
          
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

          <button 
          type = "submit"
          className = "button sign-in">sign in
          </button>

          </form>

        </div>
 
      </body>
>>>>>>> Stashed changes
    );
  }
}

export default App;
