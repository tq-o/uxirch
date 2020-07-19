import React, { Component } from "react"
import propTypes from 'prop-types';

import './Result.css'

class Result extends Component {
    constructor(props) {
      super(props)
  
    }

    render(){
        return (
            <div className = "result">
                <p className="hi">hello is the result</p>
            </div>

        )
    }
}

Result.propTypes = {
    closeCallback: propTypes.func.isRequired
  }

export default Result;
  