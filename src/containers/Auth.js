import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../actions';

//here be components

import '../css/auth.css';

class Auth extends Component {
  constructor(props) {
	super(props);
	
  }

  render() {
	return (
	  <div id="__auth">
	    <div className="wrapper">
	      <h2>Welcome</h2>
	      <form className="auth-form">
	      	<input type="text"/>
	      	<input type="text"/>
	      	<input type="password"/>
	      	<input type="submit" value="Sign in" />
	      </form>
	    </div>
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

export default connect(mapStateToProps, matchDispatchToProps)(Auth);