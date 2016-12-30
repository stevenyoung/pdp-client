import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import HomePage from './components/HomePage.jsx';

import MissingRoute from './components/MissingRoute.jsx';

ReactDOM.render(
  <Provider>
    <Router history={browserHistory}>
      <Route path="/" component={HomePage} />
      <Route path="*" component={MissingRoute} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
