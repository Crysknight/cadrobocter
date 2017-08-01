import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import * as actions from '../actions';

import ColorScale from '../components/color-scale';

class LevelOne extends Component {

  // constructor(props) {
		// super(props);
  // }

  componentWillMount() {
  	this.props.getTicket(this.props.params.safety, this.props.params.id);
  }

  render() {
  	if (!this.props.ticketLevelOne) {
  	  return (
  	  	<div id="__level_one_404">
  	  	  <h1>404</h1>
  	  	  <h3>Ticket not found</h3>
  	  	  <h3 className="spoiler">We're sorry :(</h3>
  	  	</div>
  	  );
  	} else if (JSON.stringify(this.props.ticketLevelOne) === '{}') {
  		// Here be loader. But later
  		return (
  			<div className="loading"></div>
  		);
  	}
  	let ticket = this.props.ticketLevelOne;
  	let settings = {
  		dots: true,
  		infinite: false,
  		slidesToShow: 1,
  		slidesToScroll: 1
  	}
  	let Slides = ticket.visual.map((v, i) => {
  		return (
  			<div key={i} className="level-one-slide">
	  			<img src={`/images/${v}`} alt="no-preview" />
	  			<h3>Slide</h3>
	  		</div>
  		);
  	});
	return (
	  <div id="__level_one">
	    <h1>{ticket.name}</h1>
	    <hr />
	    <div className="info-block">
	      <h2>Overall information</h2>
	      <p>{ticket.descriptionLevelOne}</p>
	      <hr />
	      <div className="stuff-list">
	      	<h3>Causes:</h3>
	      	  <ul>
	      	  	{ticket.causes.map((cause, i) => <li key={i}>&ndash; {cause}</li>)}
	      	  </ul>
	      </div>
	      <div className="stuff-list">
	      	<h3>Symptoms:</h3>
	      	  <ul>
	      	  	{ticket.symptoms.map((symptom, i) => <li key={i}>&ndash; {symptom}</li>)}
	      	  </ul>
	      </div>
		  <div className="stuff-list">
		  	<h3>Threats:</h3>
		  	  <ul>
		  		{ticket.threats.map((threat, i) => <li key={i}>&ndash; {threat}</li>)}
		  	  </ul>
		  </div>
		  <h2>Tags:</h2>
		  {ticket.tags.map((tag, i) => <div className="tag" key={i}>{tag}</div>)}
	    </div>
	    <div className="visual-block">
			  <div className="color-scales">
			  	<ColorScale level={ticket.importance} label="Importance" />
			  	<ColorScale level={ticket.complexityOfDiagnose} label="Test difficulty" />
			  	<ColorScale level={ticket.complexityOfRepair} label="Repair difficulty" />
			  </div>
			  <div className="level-one-slider">
			  	{ticket.visual.length ? <Slider {...settings}>{Slides}</Slider> : <div></div>}
			  </div>
	    </div>
	  </div>
	);
  }

}

function mapStateToProps(state) {
	return {
		user: state.user,
		ticketLevelOne: state.ticketLevelOne
	};
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
  	getTicket: actions.getTicket
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LevelOne);