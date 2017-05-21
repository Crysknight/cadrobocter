import React, { Component } from 'react';

export default class ColorScale extends Component {

  render() {
  	switch (this.props.level) {
  	  case 1: {
  	  	return (
		  <div className="scale-wrapper easy">
		  	<div className="scale-label">{this.props.label}</div>
		    <div className="scale">
		      <div className="easy" />
		      <div className="easy" />
		      <div className="easy" />
		    </div>
		  </div>
  	  	);
  	  }
  	  case 2: {
  	  	return (
		  <div className="scale-wrapper medium">
		  	<div className="scale-label">{this.props.label}</div>
		    <div className="scale">
		      <div className="medium" />
		      <div className="medium" />
		      <div className="medium" />
		    </div>
		  </div>
  	  	);
  	  }
  	  case 3: {
  	  	return (
		  <div className="scale-wrapper hard">
		  	<div className="scale-label">{this.props.label}</div>
		  	<div className="scale">
		  	  <div className="hard" />
		  	  <div className="hard" />
		  	  <div className="hard" />
		  	</div>
		  </div>
  	  	);
  	  }
  	  default: {
  	  	return <div className="scale-wrapper">Error</div>
  	  }
  	}
  }

};