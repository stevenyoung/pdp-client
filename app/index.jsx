import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import configureStore from './store/configureStore';

import MissingRoute from './components/MissingRoute.jsx';

import InputFilteredMap from './containers/InputFilteredMap';
import Home from './containers/Home';

const initialState = {
  query: {
    searchTerm: ''
  },
  places: [],
  mapCenter: {
    place: {
      lat: 37.749202,
      lng: -122.41575
    }
  },
  displayPlace: {},
  previousQueries: { terms: [] }
};

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" components={Home}>
        <IndexRoute components={InputFilteredMap} />
        <Route path="*" component={MissingRoute} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
