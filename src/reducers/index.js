import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import ticketLevelOne from './ticket-level-one';
import ticketPreview from './ticket-preview';
import auth from './auth';
import garage from './garage';

const allReducers = combineReducers({
  routing: routerReducer,
  user,
  ticketLevelOne,
  ticketPreview,
  auth,
  garage
});

export default allReducers;

