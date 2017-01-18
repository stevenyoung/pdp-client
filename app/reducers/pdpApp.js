import { combineReducers } from 'redux';
import { searchTerm, searchResults, places } from './pdp';

const reducers = {
  searchTerm,
  searchResults,
  places
};

const pdpApp = combineReducers(reducers);

export default pdpApp;
