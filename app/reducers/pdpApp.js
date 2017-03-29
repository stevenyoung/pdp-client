import { combineReducers } from 'redux';
import {
  query,
  places,
  mapCenter,
  displayPlace,
  updateLocation,
  previousQueries } from './pdp';

const reducers = {
  query,
  places,
  mapCenter,
  displayPlace,
  updateLocation,
  previousQueries
};

const pdpApp = combineReducers(reducers);

export default pdpApp;
