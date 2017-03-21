import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../actions';

//here be components

//import '../css/level-one.css';

class LevelOne extends Component {

  // constructor(props) {
	// super(props);

  // }

  render() {
	return (
	  <div id="__level_one">
	    <h1>Level One</h1>
	  </div>
	);
  }

}

function mapStateToProps(state) {
  return {
	levelOne: state.levelOne
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
	
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LevelOne);