import { combineReducers } from 'redux';
import { query, places, mapCenter } from './pdp';

const reducers = {
  query,
  places,
  mapCenter
};

const pdpApp = combineReducers(reducers);

export default pdpApp;
