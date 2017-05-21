import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

import * as actions from '../actions';

//here be components

class Garage extends Component {

  // constructor(props) {
	// super(props);

  // }

  render() {
  	return (
      <div id="__garage">
        <h1>Garage</h1>
        <hr />
        <div className="garage-checkbox">
          <label>1995 Mercedes-Benz E300 3.2l 4-Auto</label>
          <input type="radio" name="garage" />
        </div>
        <div className="garage-checkbox">
          <label>2003 Mazda Protege5 2.0l 5-Auto</label>
          <input type="radio" name="garage" />
        </div>
        <div className="garage-checkbox">
          <label>2016 Jeep Cherokee 3.6l 8-Auto</label>
          <input type="radio" name="garage" />
        </div>
        <div className="garage-checkbox">
          <label>2008 Nissan Altima 2.0l CVT</label>
          <input type="radio" name="garage" />
        </div>
      </div>
  	);
  }

}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
	
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Garage);