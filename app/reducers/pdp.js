import { SEARCH_TERM, REQUEST_PLACES, RECEIVE_PLACES } from '../actions/pdp';

export function searchTerm(state = '', action) {
  switch (action.type) {
  case SEARCH_TERM:
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

export function places(state = {
  isFetching: false,
  places: []
}, action) {
  switch (action.type) {
  case REQUEST_PLACES:
    return Object.assign({}, state, {
      isFetching: true
    });
  case RECEIVE_PLACES:
    return Object.assign({}, state, {
      isFetching: false,
      items: action.places
    });
  default:
    return state;
  }
}
