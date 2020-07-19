import React, { Component } from "react"
import PropTypes from 'prop-types';

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

Result.PropTypes = {
    closeCallback: React.PropTypes.func.isRequired
  }

export default Result;
  