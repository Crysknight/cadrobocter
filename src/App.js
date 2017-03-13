import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.dir(this.props.routing);
    return (
      <div className="App">
        <div className="App-header">
          <h2>This is an app header</h2>
          <Link className="menu-link" to="menu">Menu</Link>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(App);
