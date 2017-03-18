import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../actions';

import Input from '../components/input';

import '../css/auth.css';

class Auth extends Component {
  constructor(props) {
  	super(props);
  	this.handleForm = this.handleForm.bind(this);
  }
  handleForm(event) {
  	event.preventDefault();
  	console.dir(event.target);
  }
  render() {
  	const form = (
  	  <form className="auth-form" onSubmit={this.handleForm}>
  	    {this.props.auth.map((input) => {
  	      return (<Input 
  	        key={input.key}
  	        describer={input.describer}
  	        inputType={input.inputType}
  	        inputPlaceholder={input.inputPlaceholder}
  	        required={true}
  	      />);
  	    })}
  	    <input type="submit" value={this.props.auth[0].key.slice(0, 7) === 'sign_in' ? 'SIGN IN' : 'SIGN UP'} />
  	  </form>
  	);
	return (
	  <div id="__auth">
	    <div className="wrapper">
	      <h2>Welcome</h2>
	      <button className={this.props.auth[0].key.slice(0, 7) === 'sign_in' ? 'change-auth focused' : 'change-auth'} onClick={this.props.authSignIn}>SIGN IN</button>
	      <button className={this.props.auth[0].key.slice(0, 7) === 'sign_up' ? 'change-auth focused' : 'change-auth'} onClick={this.props.authSignUp}>SIGN UP</button>
		  {form}
	    </div>
	  </div>
	);
  }
}

function mapStateToProps(state) {
  return {
	auth: state.auth
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
	authSignIn: actions.authSignIn,
	authSignUp: actions.authSignUp
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Auth);