import React, { Component } from 'react';
// import { Link } from 'react-router';

export default class Filter extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		if (e.target.nodeName !== 'UL' && e.target.nodeName !== 'LI') {
			this.props.handleFilterClick(this.props.filter);
		}
		// this.props.handleFilterClick(this.props.filterId);

		// let sortsBy;
		// if (this.props.type === 'switch') {
		// 	sortsBy = this.props.sortsBy;
		// }
		// if (e.target.nodeName === "H3" || ~e.target.classList.value.indexOf('filter') || ~e.target.classList.value.indexOf('indicator') || ~e.target.classList.value.indexOf('active')) {
		// 	this.props.handleFilterClick(this.props.filterId, this.props.type, sortsBy);
		// }
	}

	render() {
		let filterClasses = '';
		if (this.props.filter.type === 'dropdown' && this.props.filter.status === 1) {
			filterClasses = 'unfolded';
		}
		if (this.props.filter.type === 'dropdown' && this.props.filter.status === 2) {
			filterClasses = 'enabled';
		}
		if (this.props.filter.type === 'direction' && this.props.filter.name !== 'By alphabet' && this.props.filter.status !== 0) {
			filterClasses = 'enabled';
		}
		if (this.props.filter.type === 'switch' && this.props.filter.status === 1) {
			filterClasses = 'enabled';
		}
		return (
			<button 
				className={`filter ${this.props.filter.type} ${filterClasses}`}
				disabled={!this.props.filter.enabled} 
				onClick={this.handleClick} >
					<h3>{this.props.filter.name}</h3>
					<div className={`indicator ${this.props.indicatorType} ${this.props.indicatorType}-${this.props.indicator}`} />
					{this.props.children}
			</button>
		);
	}

}

//				className={`filter${this.props.active ? ' enabled': ''}${this.props.type === 'dropdown' ? ' dropdown' : ''}${this.props.unfolded ? ' unfolded': ''}`} 