import { combineReducers } from 'redux';
import { query, places } from './pdp';

const reducers = {
  query,
  places
};

const pdpApp = combineReducers(reducers);

export default pdpApp;
