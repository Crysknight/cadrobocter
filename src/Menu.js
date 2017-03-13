import React, { Component } from 'react';
import { Link } from 'react-router';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="Menu-header">
          <h2>Welcome to React</h2>
          <Link className="app-link" to="/">App</Link>
        </div>
      </div>
    );
  }
}

export default Menu;
