import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

import * as actions from '../actions';

import BurgerMenu from './BurgerMenu';

import TicketPreview from '../components/ticket-preview';
import Filter from '../components/filter';
import DropdownItem from '../components/dropdown-item';

class SPMAndDiagnostics extends Component {

  constructor(props) {
		super(props);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handleDropdownItemClick = this.handleDropdownItemClick.bind(this);
    this.showFilters = this.showFilters.bind(this);
    this.state = {
      filtersActive: false
    };
  }

  componentWillMount() {
    let safety = this.props.routing.locationBeforeTransitions.pathname === '/safety-and-peace-of-mind' ? true : false;
    this.props.getTicketPreviews(this.props.user.token, safety);
  }

  componentWillUnmount() {
    this.props.resetFilters();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.routing.locationBeforeTransitions.pathname !== this.props.routing.locationBeforeTransitions.pathname) {
      let safety = this.props.routing.locationBeforeTransitions.pathname === '/safety-and-peace-of-mind' ? true : false;
      this.props.resetFilters();
      this.props.getTicketPreviews(this.props.user.token, safety);
    }
  }

  handleFilterClick(filter) {
    this.props.triggerFilter(filter);
  }

  handleDropdownItemClick(filter, itemText) {
    this.props.chooseDropdown(filter, itemText);
  }

  showFilters(e) {
    if (~e.target.className.indexOf('sort-button')) {
      this.setState({ filtersActive: !this.state.filtersActive });
    }
  }

  createPreviews() {
    let ticket = this.props.ticketPreview.tickets.filter((preview) => !preview.filtered);
    return ticket.map((preview) => {
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
          tools={preview.tools}
          toolsRequired={preview.toolsRequired}
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
    let pageTitle = this.props.routing.locationBeforeTransitions.pathname === '/safety-and-peace-of-mind' ? 'Safety & Peace-of-Mind' : 'Full Diagnostics';
		/*return (
		  <div id="__spm">
		    <h1>{pageTitle}</h1>
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
		);*/
    return (
      <div id="__spm">
        <section className="top-section">
          <BurgerMenu />
          <div className={`sort-button${this.state.filtersActive ? ' active' : ''}`} onClick={this.showFilters}>Sort
            <div className="filters">{Filters}</div>
          </div>
          <h1>{pageTitle}</h1>
        </section>
        <div className="container-fluid">
          <div className="row">
            {Previews}
          </div>
        </div>
      </div>
    );
  }
  
}

function mapStateToProps(state) {
  return {
    routing: state.routing,
		ticketPreview: state.ticketPreview,
    filters: state.filters,
    user: state.user
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    triggerFilter: actions.triggerFilter,
    chooseDropdown: actions.chooseDropdown,
    getTicketPreviews: actions.getTicketPreviews,
    resetFilters: actions.resetFilters
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SPMAndDiagnostics);