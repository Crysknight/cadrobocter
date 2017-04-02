import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

import ColorScale from '../components/color-scale';

import '../css/level-one.css';

class LevelOne extends Component {

  // constructor(props) {
		// super(props);
  // }

  render() {
  	if (!this.props.ticketLevelOne) {
  	  return (
  	  	<div id="__level_one_404">
  	  	  <h1>404</h1>
  	  	  <h3>Ticket not found</h3>
  	  	  <h3 className="spoiler">We're sorry :(</h3>
  	  	</div>
  	  );
  	}
  	let ticket = this.props.ticketLevelOne;
	return (
	  <div id="__level_one">
	    <h1>{ticket.name}</h1>
	    <hr />
	    <div className="info-block">
	      <h2>Overall information</h2>
	      <p>{ticket.shortDescription}</p>
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
		  <ColorScale level={ticket.importance} label="Importance" />
		  <ColorScale level={ticket.testDifficulty} label="Test difficulty" />
		  <ColorScale level={ticket.repairDifficulty} label="Repair difficulty" />
	    </div>
	  </div>
	);
  }

}

function mapStateToProps(state, ownProps) {
  let ticketLevelOne = state.ticketLevelOne.find(ticket => ticket.id === +ownProps.params.id.replace(/id_/, ''));
  if (!ticketLevelOne) {
  	return {};
  }
  return {
	ticketLevelOne: state.ticketLevelOne.find(ticket => ticket.id === +ownProps.params.id.replace(/id_/, ''))
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
		defaultAction: actions.defaultAction
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LevelOne);