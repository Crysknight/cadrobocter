import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../actions';

//here be components

import '../css/layout.css';

class App extends Component {
 //  constructor(props) {
	// super(props);
	
 //  }

  render() {
	return (
	  <div id="__layout">
	    <h1>Main Menu</h1>
	  </div>
	);
  }
}

function mapStateToProps(state) {
  return {
  	user: state.user
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
	logOut: actions.logOut
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);

// <Link to="/auth">Login</Link>
// <button style={{display: 'block', marginTop: 30}} onClick={this.props.logOut}>Log out</button>