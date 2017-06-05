import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

import BurgerMenu from './BurgerMenu';

import Input from '../components/input';

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
    for (let i = 0; i < this.props.errors.length; i++) {
      if (this.props.errors[i] === 'wrong_user' || this.props.errors[i] === 'wrong_password') {
        this.props.deleteErrors(['wrong_user', 'wrong_password']);
      }
    }
    if (event.target.lastChild.value === 'SIGN IN') {
      let login = event.target[0].value;
      let password = event.target[1].value;
      this.props.checkUser(login, password);
    }
  }
  render() {
    let errors = this.props.errors;
    let wrongUser;
    let wrongPassword;
    for (let i = 0; i < errors.length; i++) {
      if (errors[i] === 'wrong_user') {
        wrongUser = true;
      } else if (errors[i] === 'wrong_password') {
        wrongPassword = true;
      }
    }
    let submitValue = this.props.auth[0].key.slice(0, 7) === 'sign_in' ? 'SIGN IN' : 'SIGN UP';
    if (wrongUser) {
      submitValue = 'WRONG USER';
    } else if (wrongPassword) {
      submitValue = 'WRONG PASS';
    }
  	const form = (
  	  <form className="auth-form" onSubmit={this.handleForm}>
  	    {this.props.auth.map((input) => {
  	      return (<Input 
  	        key={input.key}
  	        describer={input.describer}
            onChange={() => this.props.deleteErrors(['wrong_user', 'wrong_password'])}
  	        inputType={input.inputType}
  	        inputPlaceholder={input.inputPlaceholder}
  	        required={true}
  	      />);
  	    })}
  	    <input
          type="submit"
          disabled={wrongUser || wrongPassword}
          className={wrongUser || wrongPassword ? 'error' : ''}
          value={submitValue} />
  	  </form>
  	);
	return (
	  <div id="__auth">
      <section className="top-section">
        {this.props.user.login ? <BurgerMenu /> : <div></div>}
        <h1>Car Doctor</h1>
      </section>
	    <div className="wrapper">
	      <h2>Authentication</h2>
		  {form}
	    </div>
	  </div>
	);
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    user: state.user,
    errors: state.errors
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    authSignIn: actions.authSignIn,
    authSignUp: actions.authSignUp,
    checkUser: actions.checkUser,
    deleteErrors: actions.deleteErrors
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Auth);


/*
  return (
    <div id="__auth">
      <section className="top-section">
        <BurgerMenu />
        <h1>Car Doctor</h1>
      </section>
      <div className="wrapper">
        <h2>Authentication</h2>
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
*/