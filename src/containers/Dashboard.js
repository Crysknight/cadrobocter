import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

import * as actions from '../actions';

//here be components

class Dashboard extends Component {

  // constructor(props) {
	// super(props);

  // }

  render() {
	return (
	  <h2>Dashboard</h2>
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

export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);