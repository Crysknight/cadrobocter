import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../actions';

//here be components

import '../css/layout.css';

class App extends Component {

  constructor(props) {
	super(props);
	this.disableLinks = this.disableLinks.bind(this);
	// Below is the array of links for the layout
  	this.links = [
  	  {
  	  	to: '/safety-and-peace-of-mind',
  	  	text: 'Safety & Peace-of-Mind',
  	  	enabled: () => true,
  	  	classes: 'main-menu-link'
  	  },
  	  {
  	  	to: '/full-diagnostics',
  	  	text: 'Full diagnostics',
  	  	enabled: () => true,
  	  	classes: 'main-menu-link'
  	  },
  	  {
  	  	to: '/vehicle-tracking',
  	  	text: 'Vehicle tracking',
  	  	enabled: () => true,
  	  	classes: 'main-menu-link'
  	  },
  	  {
  	  	to: '/my-garage',
  	  	text: 'My garage',
  	  	enabled: () => true,
  	  	classes: 'main-menu-link'
  	  },
  	];
  }

  // Simply pass here some links from array above to disable it in the Layout
  disableLinks(...links) {
  	for (let i = 0; i < links.length; i++) {
  	  links[i].classes = 'main-menu-link disabled';
  	  links[i].to = '';
  	}
  }

  render() {
  	if (this.props.garage.length === 0) {
  	  this.disableLinks(this.links[1], this.links[2]);
  	}
  	let Links = this.links.map((l) => <Link key={l.text} to={l.to} className={l.classes} onClick={l.enabled}>{l.text}</Link>);
	return (
	  <div id="__layout">
	    <h1>Main Menu</h1>
	    {Links}
	  </div>
	);
  }
}

function mapStateToProps(state) {
  return {
  	user: state.user,
  	garage: state.garage
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