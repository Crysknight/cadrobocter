import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

import * as actions from '../actions';

//here be components

import '../css/spm.css';

class SPM extends Component {

  // constructor(props) {
	// super(props);

  // }

  render() {
	return (
	  <div id="__spm">
	    <h1>Safety & Peace-of-Mind</h1>
	    <hr />
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

export default connect(mapStateToProps, matchDispatchToProps)(SPM);