import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import levelOne from './level-one';

const allReducers = combineReducers({
  routing: routerReducer,
  user,
  levelOne
});

export default allReducers;

