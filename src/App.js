import React, { Component } from 'react'
import './App.css';
// import owl from './owl.gif'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat1: 'coconut',
      cat2: 'coconut',
      cat3: 'coconut'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this.setState({cat1: event.target.value});
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.cat1 + ',' + this.state.cat2 + ',' + this.state.cat3);
    event.preventDefault();
  }

  render(){
    return (
      
      <body>
        {/* <div className = "container" id ="container">
          fsdfgsdgfdsfs
        </div> */}
        <button className = "button sign-out"><span>sign out</span></button>
        <button className = "button home">home</button>
        <button className = "button list">list</button>

        <div>
          <form onSubmit={this.handleSubmit}>
            <label className = "cat1">
              Category 1:
              <select name ="cat1" cat1={this.state.cat1} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
            

            <label className = "cat2">
              Category 2:
              <select name ="cat2" cat2={this.state.cat2} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
            <label className = "cat3">
              Category 3:
              <select name ="cat3" cat3={this.state.cat3} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
            <input className = "submit" type="submit" value="Submit" />
          </form>
        </div>


      </body>
      
      
    );
  }
}

export default App;
