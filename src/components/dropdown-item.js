// import React, { Component } from 'react';
// // import { Link } from 'react-router';

// export default class DropdownItem extends Component {

// 	constructor(props) {
// 		super(props);
// 		this.handleClick = this.handleClick.bind(this);
// 	}

// 	handleClick(e) {
// 		if (!~e.target.className.indexOf('active')) {
// 			this.props.handleDropdownItemClick(this.props.filter, e.target.innerText.toLowerCase());
// 		}
// 		console.log(this.props.filter, e.target.innerText.toLowerCase());
// 	}

// 	render() {
// 		return (
// 			<li onClick={this.handleClick} className={`dropdown-item ${this.props.active ? 'active': ''}`}>{this.props.children}</li>
// 		);
// 	}

// }

import React, { Component } from 'react';
// import { Link } from 'react-router';

export default class DropdownItem extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		let itemText;
		if (e.target.className === 'unit') {
			itemText = e.target.innerText.toLowerCase();
		} else if (e.target.className === 'amount') {
			itemText = e.target.previousSibling.innerText.toLowerCase();
		} else if (e.target.className.indexOf('dropdown-item') !== -1) {
			itemText = e.target.firstChild.innerText.toLowerCase();
		}
		if (!~e.target.className.indexOf('active') && !~e.target.parentElement.className.indexOf('active')) {
			this.props.handleDropdownItemClick(this.props.filter, itemText);
			e.stopPropagation();
		}
	}

	render() {
		return (
			<li onClick={this.handleClick} className={`dropdown-item ${this.props.active ? 'active': ''}`}>
				<span className="unit">{this.props.children}</span>
				<span className="amount"> ({this.props.itemsAmount})</span>
			</li>
		);
	}

}