import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Style/NavBar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div>Logo goes here</div>
        <div>Pokemon List</div>
        <div>
          <input type="text" />
          <button>Search</button>
        </div>

      </div>
    )
  }
}