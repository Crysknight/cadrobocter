import React, { Component } from 'react';
// import { Link } from 'react-router';

export default class Filter extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		if (~e.target.parentElement.className.indexOf('disabled')) {
			return;
		}
		if (e.target.nodeName !== 'UL' && (e.target.nodeName !== 'LI' || ~e.target.className.indexOf('active'))) {
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
			<div 
				className={`filter ${this.props.filter.type} ${filterClasses}${this.props.filter.enabled ? '' : ' disabled'}${this.props.filter.name === 'By alphabet' ? ' alphabet' : ''}`}
				onClick={this.handleClick} >
					<div className="filter-title">{this.props.filter.name}</div>
					<div className={`indicator ${this.props.indicatorType} ${this.props.indicatorType}-${this.props.indicator}`} />
					{this.props.children}
			</div>
		);
	}

}

//				className={`filter${this.props.active ? ' enabled': ''}${this.props.type === 'dropdown' ? ' dropdown' : ''}${this.props.unfolded ? ' unfolded': ''}`} 