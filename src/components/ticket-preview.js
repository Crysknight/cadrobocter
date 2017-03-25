import React, { Component } from 'react';
import 

export default class TicketPreview extends Component {

  // constructor(props) {
	// super(props);

  // }

  render() {
		return (
		  <div className="preview">
		  	<h3>{this.props.title}</h3>
		  	<img className="tools-req" src={this.props.tools} alt="" />
		  </div>
		);
  }

}