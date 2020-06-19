import React, { Component } from 'react'
import './App.css';

import button from './img/forgot-password-button.png';
import circle from './img/circle.png';


class App extends Component {

  render(){
    return (
      
      <body>
        {/* <div className = "container" id ="container">
          fsdfgsdgfdsfs
        </div> */}
       {/* <button className = "button sign-out">sign out</button>
        <button className = "button home">here</button>
      <button className = "button list">out</button>*/}

        

        <div className = "container">
          
          <img className = "circleImage" src = {circle} alt="alternatetext"></img>

          <a style = {{backgroundColor: 'transparent', border: 'none'}}href="#">
          <img className = "image" src = {button} alt="alternatetext"></img>
          </a>

          <button className = "button sign-in">sign in</button>

          
          <input className = "enterUserName" placeholder = "username"></input>
          <input className = "enterPassword" placeholder = "password"></input>
          


        </div>

          

        


       
      </body>


      
    );
  }
}


export default App;
