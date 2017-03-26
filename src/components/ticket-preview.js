import React, { Component } from 'react';

export default class TicketPreview extends Component {

  constructor(props) {
		super(props);
		this.state = {
			tools: require(`../../public/images/${this.props.tools}.png`)
		}
  }

  render() {
		return (
		  <div className="preview">
		  	<h3>{this.props.title}</h3>
		  	<img className="tools-req" src={this.state.tools} alt="" />
		  </div>
		);
  }

}