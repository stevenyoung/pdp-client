import { combineReducers } from 'redux';
import { query, places, mapCenter, displayPlace, updateLocation } from './pdp';

const reducers = {
  query,
  places,
  mapCenter,
  displayPlace,
  updateLocation
};

const pdpApp = combineReducers(reducers);

export default pdpApp;
