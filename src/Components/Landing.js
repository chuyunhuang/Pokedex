import React, { Component } from 'react';
import '../Style/Landing.css';

export default class Landing extends Component {
  state = {

  }

  render() {
    return (
      <div className="main-body-container">
        <div className="header">
          Pokemon sth sth
        </div>
        <div className="list-container">
          <div>Name: </div>
          <div>Image:</div>
          <div>Level:</div>
        </div>
      </div>
    )
  }
}