import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Input from '../components/input';

import '../css/auth.css';

class Auth extends Component {
  constructor(props) {
  	super(props);
  	this.handleForm = this.handleForm.bind(this);
  }
  // componentWillReceiveProps(nextProps) {
  // 	if (this.props.user !== nextProps.user && !nextProps.user.error) {
  // 	  browserHistory.push('/');
  // 	}
  // }
  handleForm(event) {
  	event.preventDefault();
    // for (let i = 0; i < event.target.length - 1; i++) {
    //   console.dir(event.target[i].value);
    // }
    // console.dir(event.target.lastChild.value);
    if (event.target.lastChild.value === 'SIGN IN') {
      let login = event.target[0].value;
      let password = event.target[1].value;
      this.props.checkUser({ login, password });
    }
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
	      <button 
          className={this.props.auth[0].key.slice(0, 7) === 'sign_in' ? 'change-auth focused' : 'change-auth'} 
          onClick={this.props.authSignIn}
        >SIGN IN</button>
	      <button 
          className={this.props.auth[0].key.slice(0, 7) === 'sign_up' ? 'change-auth focused' : 'change-auth'} 
          onClick={this.props.authSignUp}
        >SIGN UP</button>
		  {form}
	    </div>
	  </div>
	);
  }
}

function mapStateToProps(state) {
  return {
	auth: state.auth,
    user: state.user
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
	authSignIn: actions.authSignIn,
	authSignUp: actions.authSignUp,
    checkUser: actions.checkUser
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Auth);