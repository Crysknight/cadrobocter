import React, { Component } from 'react';
// import { Link } from 'react-router';

export default class Filter extends Component {

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
				{this.props.children}
			</div>
		);
	}

}