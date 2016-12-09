import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import HomePage from './components/HomePage.jsx';
import HomeContent from './components/HomeContent.jsx';

import MissingRoute from './components/MissingRoute.jsx';

ReactDOM.render(
  <Provider>
    <Router history={browserHistory}>
      <Route path="/" component={HomePage}>
        <IndexRoute component={HomeContent} />
      </Route>
      <Route path="*" component={HomePage}>
        <IndexRoute component={MissingRoute} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
