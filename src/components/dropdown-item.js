import React, { Component } from 'react';
// import { Link } from 'react-router';

export default class DropdownItem extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.props.handleDropdownItemClick(this.props.filter, e.target.innerText.toLowerCase());
	}

	render() {
		return (
			<li onClick={this.handleClick} className={`dropdown-item ${this.props.active ? 'active': ''}`}>{this.props.children}</li>
		);
	}

}