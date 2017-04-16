import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

import * as actions from '../actions';

import TicketPreview from '../components/ticket-preview';
import Filter from '../components/filter';
import DropdownItem from '../components/dropdown-item';

import '../css/spm.css';
import '../css/filter.css';

class SPM extends Component {

  constructor(props) {
		super(props);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handleDropdownItemClick = this.handleDropdownItemClick.bind(this);
  }

  // componentWillReceiveProps(newProps) {
  //   console.log(this.props.filters);
  //   console.log(newProps.filters);
  // }

  handleFilterClick(filter) {
    this.props.triggerFilter(filter);
  }

  handleDropdownItemClick(filter, itemText) {
    this.props.chooseDropdown(filter, itemText);
  }

  createPreviews() {
    let ticket = this.props.ticketPreview.tickets.filter((preview) => preview.display);
    return ticket.map((preview) => {
      let toolsImage;
      switch (true) {
        case (preview.tools === 0): {
          toolsImage = 'wrench-0';
          break;
        }
        case (preview.tools >= 1 && preview.tools < 4): {
          toolsImage = 'wrench-1';
          break;
        }
        case (preview.tools >= 4 && preview.tools < 7): {
          toolsImage = 'wrench-4';
          break;
        }
        case (preview.tools >= 7): {
          toolsImage = 'wrench-7';
          break;
        }
        default: {
          toolsImage = 'error.png';
        }
      }
      return (
        <TicketPreview 
          key={preview.id} 
          id={preview.id}
          title={preview.name}
          location={preview.location}
          mechanicalGroup={preview.mechanicalGroup}
          importance={preview.imp}
          testDifficulty={preview.cod}
          repairDifficulty={preview.cor} 
          tools={toolsImage}
          photo={preview.photo} />
      );
    });
  }

  createFilters() {
    return this.props.filters.map(filter => {
      let DropdownItems;
      let indicatorType;
      let indicator;
      switch (filter.type) {
        case 'switch': {
          indicatorType = 'checkbox';
          switch (filter.status) {
            case 0: {
              indicator = 'unchecked';
              break;
            }
            case 1: {
              indicator = 'checked';
              break;
            }
            default: {
              console.log('error from createFilters: wrong filter.status');
            }
          }
          break;
        }
        case 'direction': {
          indicatorType = 'arrow';
          switch (filter.status) {
            case 0: {
              indicator = '';
              break;
            }
            case 1: {
              indicator = 'down';
              break;
            }
            case 2: {
              indicator = 'up';
              break;
            }
            default: {
              console.log('error from createFilters: wrong filter.status');
            }
          }
          break;
        }
        case 'dropdown': {
          indicatorType = 'caret';
          switch (filter.status) {
            case 0: {
              indicator = 'down';
              break;
            }
            case 1: {
              indicator = 'up';
              break;
            }
            case 2: {
              indicator = 'cross';
              break;
            }
            default: {
              console.log('error from createFilters: wrong filter.status');
            }
          }
          DropdownItems = (
            <ul className="dropdown-items">
              {filter.units.map((unit, index) => {
                return (
                  <DropdownItem 
                    filter={filter} 
                    handleDropdownItemClick={this.handleDropdownItemClick} 
                    key={index}
                    active={filter.activeUnit === unit}>
                  {unit}
                  </DropdownItem>
                );
              })}
            </ul>
          );
          break;
        }
        default: {
          console.log('error from createFilters: wrong filter.type');
        }
      }
      return (
        <Filter 
          key={filter.id}
          filter={filter}
          indicatorType={indicatorType}
          indicator={indicator}
          handleFilterClick={this.handleFilterClick} >
          {DropdownItems}
        </Filter>
      );
    });
  }

  render() {
    let Previews = this.createPreviews();
    let Filters = this.createFilters();
		return (
		  <div id="__spm">
		    <h1>Safety & Peace-of-Mind</h1>
		    <hr />
		  	<div className="tickets">
			    {Previews}
			  </div>
			  <div className="filters">
          <h2>Filters</h2>
          <button className="fold-filters"></button>
          {Filters}
			  </div>
		  </div>
		);
  }
  
}

function mapStateToProps(state) {
  return {
		ticketPreview: state.ticketPreview,
    filters: state.filters
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    triggerFilter: actions.triggerFilter,
    chooseDropdown: actions.chooseDropdown
  //   filterTickets: actions.filterTickets,
  //   handleDropdown: actions.handleDropdown,
  //   sortAlphabetUp: actions.sortAlphabetUp,
		// sortAlphabetDown: actions.sortAlphabetDown,
  //   sortToolsUp: actions.sortToolsUp,
  //   sortToolsDown: actions.sortToolsDown,
  //   sortCorUp: actions.sortCorUp,
  //   sortCorDown: actions.sortCorDown,
  //   sortCodUp: actions.sortCodUp,
  //   sortCodDown: actions.sortCodDown,
  //   sortImportanceUp: actions.sortImportanceUp,
  //   sortImportanceDown: actions.sortImportanceDown,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SPM);