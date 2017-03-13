import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import MasterPage from './MasterPage';
import App from './App';
import Menu from './Menu';
import './index.css';

import allReducers from './reducers';

const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={MasterPage}>
				<IndexRoute component={App}></IndexRoute>
				<Route path="menu" component={Menu}></Route>
			</Route>
		</Router>
	</Provider>,
document.getElementById('root')
);
