import React, { Component } from 'react';
import { Link } from 'react-router';

import ColorScale from './color-scale';

export default class TicketPreview extends Component {

  // constructor(props) {
		// super(props);
  // }

  render() {
		return (
				<div className="ticket-preview-wrapper">
					<Link to={`/ticket/${this.props.safety ? '1' : '0'}/${this.props.id}`}>
					  <div className="ticket-preview" style={{ 
					  	"backgroundImage": `url("/images/${this.props.photo}")`, 
					  	"backgroundRepeat": "no-repeat",
					  	"backgroundSize": "cover",
					  	"backgroundPosition": "center"
					  }} >
					  	<div className="ticket-preview-mobile-bg-shade">
						  	<div className="preview-info">
							  	<h3>{this.props.title}</h3>
							  	<p className="preview-location"><b>Location:</b> {this.props.location}</p>
							  	<p className="preview-location"><b>Mech. group:</b> {this.props.mechanicalGroup}</p>
							  	<p className={`tools-required${this.props.toolsRequired ? ' true' : ' false'}`}><b>Tools required&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></p>
								  <ColorScale level={this.props.importance} label="Importance" />
								  <ColorScale level={this.props.testDifficulty} label="Test diffic." />
								  <ColorScale level={this.props.repairDifficulty} label="Repair diffic." />
							  </div>
							  <div className="preview-photo">
							  	<div className="preview-photo-img" style={{ "backgroundImage": `url("/images/${this.props.photo}")` }} />
							  </div>
							</div>
					  </div>
				  </Link>
				</div>
		);
  }

}