import { combineReducers } from 'redux';
import { searchTerm, searchResults } from './pdp';

const pdpApp = combineReducers({ searchTerm, searchResults });

export default pdpApp;
