import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


import App from './containers/App';
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

ReactDOM.render(
<Provider store={store}>
  <Router history={history}>
    <Route path="/" component={MasterPage}>
      <IndexRoute component={App} onEnter={requireAuth}/>
      <Route path="/auth" component={Auth} />
    </Route>
  </Router>
</Provider>,
document.getElementById('root')
);
