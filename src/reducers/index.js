import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './users';
import levelOne from './levelOne';

const allReducers = combineReducers({
	routing: routerReducer,
	users,
	levelOne
});

export default allReducers;

