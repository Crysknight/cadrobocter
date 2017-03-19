import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../actions';

//here be components

import '../css/app.css';

class App extends Component {
  constructor(props) {
	super(props);
	
  }

  render() {
	return (
	  <div id="__app">
	    <Link to="/login">Login</Link>
	  </div>
	);
  }
}

function mapStateToProps(state) {
  return {

  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
	
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);