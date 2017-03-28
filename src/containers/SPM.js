import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

import * as actions from '../actions';

import Filter from './Filter';

import TicketPreview from '../components/ticket-preview';

import '../css/spm.css';

class SPM extends Component {

  // constructor(props) {
		// super(props);

  // }

  render() {
  	let previews = this.props.ticketPreview.map((preview) => {
  	let toolsImage = '';
  		switch (true) {
  			case (preview.tools === 0): {
  				toolsImage += 'wrench-0';
  				break;
  			}
  			case (preview.tools >= 1 && preview.tools < 4): {
  				toolsImage += 'wrench-1';
  				break;
  			}
  			case (preview.tools >= 4 && preview.tools < 7): {
  				toolsImage += 'wrench-4';
  				break;
  			}
  			case (preview.tools >= 7): {
  				toolsImage += 'wrench-7';
  				break;
  			}
  			default: {
  				toolsImage += 'error.png';
  			}
  		}
  		return (
  			<TicketPreview 
  				key={preview.id} 
          id={preview.id}
  				title={preview.name}
          location={preview.location}
          importance={preview.imp}
          testDifficulty={preview.cod}
          repairDifficulty={preview.cor} 
  				tools={toolsImage}
  				photo={preview.photo} />
  		);
  	});
		return (
		  <div id="__spm">
		    <h1>Safety & Peace-of-Mind</h1>
		    <hr />
		  	<div className="tickets">
			    {previews}
			  </div>
			  <div className="filters">
          <h2>Filters</h2>
          <button className="fold-filters"></button>
          <Filter filterName="By alphabet" indicatorType="arrow" indicator="down" />
			  </div>
		  </div>
		);
  }
  
}

function mapStateToProps(state) {
  return {
		ticketPreview: state.ticketPreview
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
		
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SPM);