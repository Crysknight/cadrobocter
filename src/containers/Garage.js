import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

import * as actions from '../actions';

//here be components

//import '../css/garage.css';

class Garage extends Component {

  // constructor(props) {
	// super(props);

  // }

  render() {
	return (
	  <h1>Garage</h1>
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

export default connect(mapStateToProps, matchDispatchToProps)(Garage);