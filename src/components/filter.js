import React, { Component } from 'react';
// import { Link } from 'react-router';

export default class Filter extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		let sortsBy;
		if (this.props.type === 'switch') {
			sortsBy = this.props.sortsBy;
		}
		if (e.target.nodeName === "H3" || ~e.target.classList.value.indexOf('filter') || ~e.target.classList.value.indexOf('indicator') || ~e.target.classList.value.indexOf('active')) {
			this.props.handleFilterClick(this.props.filterId, this.props.type, sortsBy);
		}
	}

	render() {
		return (
			<button 
				className={`filter${this.props.active ? ' enabled': ''}${this.props.type === 'dropdown' ? ' dropdown' : ''}${this.props.unfolded ? ' unfolded': ''}`} 
				disabled={!this.props.enabled} 
				onClick={this.handleClick} >
					<h3>{this.props.filterName}</h3>
					<div className={`indicator ${this.props.indicatorType} ${this.props.indicatorType}-${this.props.indicator}`} />
					{this.props.children}
			</button>
		);
	}

}