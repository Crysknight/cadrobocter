import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../actions';

//here be components

import '../css/filter.css';

class Filter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			indicator: this.props.indicator
		}
	}

	render() {
		return (
			<div className="filter">
				<h3>{this.props.filterName}</h3>
				<div className={`${this.props.indicatorType} ${this.props.indicatorType}-${this.state.indicator}`} />
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

export default connect(mapStateToProps, matchDispatchToProps)(Filter);