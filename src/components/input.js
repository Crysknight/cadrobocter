import React, { Component } from 'react';

export default class Input extends Component {
  render() {
	return (
	  <input onFocus={this.props.onFocus} type={this.props.inputType} placeholder={this.props.inputPlaceholder} />
	);
  }
}