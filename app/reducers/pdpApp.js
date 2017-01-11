import { combineReducers } from 'redux';
import { searchTerm, searchResults, places } from './pdp';

const pdpApp = combineReducers({ searchTerm, searchResults, places });

export default pdpApp;
