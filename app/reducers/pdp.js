import { combineReducers } from 'redux';
import * as actions from '../actions/pdp';


function searchTerm(state = '', action) {
  switch (action.type) {
  case actions.SEARCH_TERM:
    return action.text;
  default:
    return state;
  }
}

function searchResults(state = [], action) {
  switch (action.type) {
  default:
    return state;
  }
}

const pdpApp = combineReducers({ searchTerm, searchResults });

export default pdpApp;
