import React, { Component } from 'react';
import { Link } from 'react-router';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
	    <div className="app">
	    	<h1>Hello, my name is Awesome app</h1>
	    	{this.props.children}
	    	<Link to="menu">Menu</Link>
	    	<Link to="/">Main Page</Link>
	    </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		users: state.users
	};
}

export default connect(mapStateToProps)(App);
