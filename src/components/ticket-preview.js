import React, { Component } from 'react';
import { Link } from 'react-router';

import ColorScale from './color-scale';

export default class TicketPreview extends Component {

  constructor(props) {
		super(props);
		this.state = {
			tools: require(`../../public/images/${this.props.tools}.png`),
			photo: require(`../../public/images/${this.props.photo}.jpg`)
			// that's just dumb approach. I need to figure out, how to catch error here, because they will
			// put down the whole page, if there's no image in folder
		};
  }

  render() {
		return (
			<Link to={`/ticket/id_${this.props.id}`}>
			  <div className="ticket-preview">
			  	<div className="preview-info">
				  	<h3>{this.props.title}</h3>
				  	<hr />
				  	<p className="preview-location"><b>Location:</b> {this.props.location}</p>
				  	<p className="preview-location"><b>Mech. group:</b> {this.props.mechanicalGroup}</p>
				  	<div className="info-block"><b>Tools required: </b><img className="tools-req" src={this.state.tools} alt="" /></div>
					  <ColorScale level={this.props.importance} label="Importance" />
					  <ColorScale level={this.props.testDifficulty} label="Test difficulty" />
					  <ColorScale level={this.props.repairDifficulty} label="Repair difficulty" />
				  </div>
				  <div className="preview-photo">
				  	<img className="preview-photo-img" src={this.state.photo} alt="" />
				  </div>
			  </div>
		  </Link>
		);
  }

}