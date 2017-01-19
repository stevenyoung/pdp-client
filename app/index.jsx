import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import configureStore from './store/configureStore';

// import HomePage from './components/HomePage.jsx';

import MissingRoute from './components/MissingRoute.jsx';

import VisibleMap from './containers/VisibleMap';


const initialState = {
  query: {
    searchTerm: ''
  },
  places: []
};

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" components={VisibleMap} />
      <Route path="*" component={MissingRoute} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
