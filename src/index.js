import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import MasterPage from './MasterPage';
import App from './App';
import Menu from './Menu';
import './index.css';

ReactDOM.render(
<Router history={browserHistory}>
	<Route path="/" component={MasterPage}>
		<IndexRoute component={App}></IndexRoute>
		<Route path="menu" component={Menu}></Route>
	</Route>
</Router>,
document.getElementById('root')
);
