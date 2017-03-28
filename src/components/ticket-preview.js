import React, { Component } from 'react';

export default class TicketPreview extends Component {

  constructor(props) {
		super(props);
		this.state = {
			tools: require(`../../public/images/${this.props.tools}.png`),
			photo: require(`../../public/images/${this.props.photo}.jpg`)
			// that's just dumb approach. I need to figure out, how to catch error here, because they will
			// put down the whole page, if there's no image in folder
		};
		this.animateEnter = this.animateEnter.bind(this);
		this.animateLeave = this.animateLeave.bind(this);
  }

  componentDidMount() {
  	let imgWidth = this.wrapperHeight * 2;
  	let left = 0 - (imgWidth - this.wrapperHeight)/2;
  	this.img.style.left = `${left}px`;
  	setTimeout(() => this.img.style.transition = 'all 2s', 100);
  }

  animateEnter() {

  }

  animateLeave() {

  }

  render() {
		return (
		  <div className="ticket-preview">
		  	<div className="preview-info">
			  	<h3>{this.props.title}</h3>
			  	<img className="tools-req" src={this.state.tools} alt="" />
			  </div>
			  <div className="preview-photo" ref={(imgWrapper) => {this.wrapperHeight = imgWrapper.clientHeight}}>
			  	<img onMouseEnter={this.animateImage} onMouseLeave={this.animateEnter} ref={(img) => {this.img = img}} className="preview-photo-img" src={this.state.photo} alt="" />
			  </div>
		  </div>
		);
  }

}