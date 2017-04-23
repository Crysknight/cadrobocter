import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import errors from './errors';
import ticketLevelOne from './ticket-level-one';
import ticketPreview from './ticket-preview';
import auth from './auth';
import garage from './garage';
import filters from './filters';

const allReducers = combineReducers({
  routing: routerReducer,
  user,
  errors,
  ticketLevelOne,
  ticketPreview,
  auth,
  garage,
  filters
});

export default allReducers;

