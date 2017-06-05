import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../actions';

//here be components

class TopMenu extends Component {

  constructor(props) {
	super(props);
	// Below is the array of links for the layout
	this.showBurgerDropdown = this.showBurgerDropdown.bind(this);
	this.logOut = this.logOut.bind(this);
	this.links = [
	  {
	  	to: '/safety-and-peace-of-mind',
	  	text: 'Safety & Peace-of-Mind',
	  	classes: 'burger-menu-link'
	  },
	  {
	  	to: '/full-diagnostics',
	  	text: 'Full diagnostics',
	  	classes: 'burger-menu-link'
	  },
	  {
	  	to: '/my-garage',
	  	text: 'My garage',
	  	classes: 'burger-menu-link'
	  }
	];
	this.state = {
		burgerActive: false
	};
  }

  // Simply pass here some links from array above to disable it in the Layout
  disableLinks(...links) {
  	for (let i = 0; i < links.length; i++) {
  	  links[i].classes = 'burger-menu-link disabled';
  	  links[i].to = '';
  	}
  }

  showBurgerDropdown(e) {
  	if (e.target.className.indexOf('disabled') === -1) {
  		this.setState({ burgerActive: !this.state.burgerActive });
  	}
  }

  logOut() {
  	this.props.logOut();
  }

  render() {
  	// Disable the links to the users with no access granted. Currently disabled!
  	if (this.props.user.role === 'user') {
  	  this.disableLinks(this.links[1]);
  	}
  	this.disableLinks(this.links[2]);
  	let Links = this.links.map((l) => <li key={l.text}><Link to={l.to} activeClassName="active" className={l.classes}>{l.text}</Link></li>);
		return (
		  <div className={`burger-menu${this.state.burgerActive ? ' active' : ''}`} onClick={this.showBurgerDropdown}>
		  	<div className="burger-bar" />
		  	<div className="burger-bar" />
		  	<div className="burger-bar" />
		  	<div className="burger-menu-dropdown">
		  		<ul>
		    	{Links}
		    	<li><Link to="/auth" onClick={this.logOut} className="log-out">Log out</Link></li>
		    	</ul>
		    </div>
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

export default connect(mapStateToProps, matchDispatchToProps)(TopMenu);