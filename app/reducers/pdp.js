import {
  SET_SEARCH_TERM,
  REQUEST_PLACES,
  RECEIVE_PLACES,
  SELECT_LOCATION
} from '../actions/pdp';

export function query(state = '', action) {
  switch (action.type) {
  case SET_SEARCH_TERM:
    return Object.assign({}, state, {
      searchTerm: action.text
    });
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

export function focusMap(state = '', action) {
  switch (action.type) {
  case SELECT_LOCATION:
    return Object.assign({}, state, {
      place: action.place
    });
  default:
    return state;
  }
}
