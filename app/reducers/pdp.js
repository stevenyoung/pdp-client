import * as actions from '../actions/pdp';

export function searchTerm(state = '', action) {
  switch (action.type) {
  case actions.SEARCH_TERM:
    return action.text;
  default:
    return state;
  }
}

export function searchResults(state = [], action) {
  switch (action.type) {
  default:
    return state;
  }
}
