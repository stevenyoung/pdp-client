import * as actions from '../actions/pdp';

const initialState = {
  searchTerm: '',
  searchResults: []
};

function searchTerm(state = '', action) {
  switch (action.type) {
  case actions.SEARCH_TERM:
    return { ...state, searchTerm: action.text };
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

export default function pdpApp(state = initialState, action) {
  return {
    searchTerm: searchTerm(state.searchTerm, action),
    searchResults: searchResults(state.searchResults, action)
  };
}

