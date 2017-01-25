import { combineReducers } from 'redux';
import { query, places, mapCenter, displayPlace } from './pdp';

const reducers = {
  query,
  places,
  mapCenter,
  displayPlace
};

const pdpApp = combineReducers(reducers);

export default pdpApp;
