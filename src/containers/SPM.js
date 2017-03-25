import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

import * as actions from '../actions';

import TicketPreview from '../components/ticket-preview';

import '../css/spm.css';

class SPM extends Component {

  // constructor(props) {
		// super(props);

  // }

  render() {
  	let previews = this.props.ticketPreview.map((preview) => {
  		let toolsImage = 'file:///C:/node/cadrobocter/public/images/';
  		// let toolsImage = '../../public/images/'; //The code above is temporary, and this is the right one for production
  		switch (true) {
  			case (preview.tools === 0): {
  				toolsImage += 'wrench-0.png';
  				break;
  			}
  			case (preview.tools >= 1 && preview.tools < 4): {
  				toolsImage += 'wrench-1.png';
  				break;
  			}
  			case (preview.tools >= 4 && preview.tools < 7): {
  				toolsImage += 'wrench-4.png';
  				break;
  			}
  			case (preview.tools >= 7): {
  				toolsImage += 'wrench-7.png';
  				break;
  			}
  			default: {
  				toolsImage += 'error.png';
  			}
  		}
  		// if (preview.tools == 0) {
  		// 	toolsImage += 'wrench-0.png';
  		// } else if (preview.tools )
  		return (
  			<TicketPreview 
  				key={preview.id} 
  				title={preview.name} 
  				tools={toolsImage} />
  		);
  	})
		return (
		  <div id="__spm">
		    <h1>Safety & Peace-of-Mind</h1>
		    <hr />
		    {previews}
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