import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import levelOne from './level-one';
import auth from './auth';

const allReducers = combineReducers({
  routing: routerReducer,
  user,
  levelOne,
  auth
});

export default allReducers;

