import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cookie from 'react-cookie';


import Layout from './containers/Layout';
import Auth from './containers/Auth';

import MasterPage from './components/MasterPage';
import './css/index.css';

import allReducers from './reducers';

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store);

function requireAuth(nextState, replace) {
  if (JSON.stringify(store.getState().user) === '{}') {
  	replace('/auth');
  }
}

function init() {
  let login = cookie.load('login');
  let token = cookie.load('token');
  if (login && token) {
  	store.dispatch({ type: 'CHECK_USER_SUCCESS', payload: { login, token }});
  }
}

ReactDOM.render(
<Provider store={store}>
  <Router history={history}>
    <Route path="/" onEnter={init} component={MasterPage}>
      <IndexRoute component={Layout} onEnter={requireAuth}/>
      <Route path="/auth" component={Auth} />
    </Route>
  </Router>
</Provider>,
document.getElementById('root')
);
