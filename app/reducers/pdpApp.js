import { combineReducers } from 'redux';
import { query, searchResults, places } from './pdp';

const reducers = {
  query,
  searchResults,
  places
};

const pdpApp = combineReducers(reducers);

export default pdpApp;
