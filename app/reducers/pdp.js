import {
  SET_SEARCH_TERM,
  UPDATE_QUERY_LIST,
  REQUEST_PLACES,
  RECEIVE_PLACES,
  SELECT_LOCATION,
  DISPLAY_PLACE,
  GET_DEVICE_LOCATION,
  ADD_NEW_CONTENT,
  USER_LOGGED_IN

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

export function mapCenter(state = '', action) {
  switch (action.type) {
  case SELECT_LOCATION:
    return Object.assign({}, state, {
      place: action.place
    });
  default:
    return state;
  }
}

export function displayPlace(state = {}, action) {
  switch (action.type) {
  case DISPLAY_PLACE:
    return Object.assign({}, state, {
      place: action.place
    });
  default:
    return state;
  }
}

export function updateLocation(state = {}, action) {
  switch (action.type) {
  case GET_DEVICE_LOCATION:
    return Object.assign({}, state, {
      userPosition: action.position
    });
  default:
    return state;
  }
}

export function previousQueries(state = {}, action) {
  switch (action.type) {
  case UPDATE_QUERY_LIST:
    return Object.assign({}, state, {
      terms: action.terms
    });
  default:
    return state;
  }
}

export function isUserAddingContent(state = {}, action) {
  switch (action.type) {
  case ADD_NEW_CONTENT:
    return Object.assign({}, state, {
      position: action.position
    });
  default:
    return state;
  }
}

export function isUserLoggedIn(state = {}, action) {
  switch (action.type) {
  case USER_LOGGED_IN:
    return Object.assign({}, state, {
      status: action.status
    });
    default:
      return state;
  }
}
