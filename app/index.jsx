import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import configureStore from './store/configureStore';

import Home from './containers/Home';
import InputFilteredMap from './containers/InputFilteredMap';
import ContactForm from './components/ContactForm';
import NewPlaceForm from './components/NewPlaceForm';
import MissingRoute from './components/MissingRoute.jsx';

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
  previousQueries: { terms: [] },
  isUserAddingContent: false,
  isUserLoggedIn: false,
  userMarkerLocation: {
    lat: 0.0,
    lng: 0.0
  }
};

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" components={Home}>
        <IndexRoute components={InputFilteredMap} />
        <Route path="/new" components={NewPlaceForm} />
        <Route path="/contact" components={ContactForm} />

        <Route path="*" component={MissingRoute} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
