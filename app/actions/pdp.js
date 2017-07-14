/* action types */

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const UPDATE_QUERY_LIST = 'UPDATE_QUERY_LIST';
export const REQUEST_PLACES = 'REQUEST_PLACES';
export const RECEIVE_PLACES = 'RECEIVE_PLACES';
export const SELECT_LOCATION = 'SELECT_LOCATION';
export const DISPLAY_PLACE = 'DISPLAY_PLACE';
export const GET_DEVICE_LOCATION = 'GET_DEVICE_LOCATION';
export const ADD_NEW_CONTENT = 'ADD_NEW_CONTENT';
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const FORM_UPDATE_VALUE = 'FORM_UPDATE_VALUE';
export const FORM_RESET = 'FORM_RESET';
export const UPDATE_USER_MARKER = 'UPDATE_USER_MARKER';

/* action creators */

// const apiServer = ''; // production, no CORS
// const apiServer = '//localhost:8888'; // flask: gunicorn -b 127.0.0.8 main:APP
const apiServer = '//localhost:8000'; // django, dev with cors, NOT production

export function setSearchTerm(text) {
  return { type: SET_SEARCH_TERM, text };
}

export function requestPlaces(query) {
  return {
    type: REQUEST_PLACES,
    query
  };
}

export function updateQueryList(text, previousQueries) {
  const trimmed = text.trim();
  if (trimmed.length > 0) {
    if (previousQueries.terms.indexOf(trimmed) > -1) {
      previousQueries.terms.splice(previousQueries.terms.indexOf(trimmed), 1);
    }
    previousQueries.terms.push(trimmed);
  }
  return {
    type: UPDATE_QUERY_LIST,
    terms: previousQueries.terms
  };
}

export function receivePlaces(query, json) {
  return {
    type: RECEIVE_PLACES,
    query,
    places: json.result.map((child) => child.place)
  };
}

export function centerMapCoords(place) {
  return {
    type: SELECT_LOCATION,
    place
  };
}

export function updateMapCenter(place) {
  return (dispatch) => {
    dispatch(centerMapCoords(place));
  };
}

export function displayPlace(place) {
  return {
    type: DISPLAY_PLACE,
    place
  };
}

export function updateDisplayedPlace(place) {
  return (dispatch) => {
    dispatch(displayPlace(place));
  };
}

export function updateDeviceLocation(position) {
  return {
    type: GET_DEVICE_LOCATION,
    position
  };
}

export function fetchPlacesByQuery(query) {
  return (dispatch) => {
    dispatch(requestPlaces(query));
    return fetch(`${apiServer}/search/${query}`)
    .then(response => response.json())
    .then(json => dispatch(receivePlaces(query, json)))
    .then(dispatch(setSearchTerm('')));
  };
}

export function fetchPlacesByLocation(position) {
  const lat = position.lat;
  const lng = position.lng;
  const query = { searchTerm: '' };
  return (dispatch) => {
    dispatch(updateDeviceLocation(position));
    return fetch(`${apiServer}/places/near/${lng}/${lat}`)
    // return fetch(`/places/near/${lng}/${lat}`)
    .then(response => response.json())
    .then(json => dispatch(receivePlaces(query, json)))
    .catch(err => (console.log('error: ', err)));
  };
}

export function addContentAtPosition(position) {
  return {
    type: ADD_NEW_CONTENT,
    position
  };
}

export function userLogin(status) {
  return {
    type: USER_LOGGED_IN,
    status
  };
}

export function update(name, value) {
  return (dispatch) => dispatch({
    type: FORM_UPDATE_VALUE,
    name,
    value
  });
}

export function reset() {
  return (dispatch) => dispatch({
    type: FORM_RESET
  });
}

export function userMarker(position) {
  return {
    type: UPDATE_USER_MARKER,
    position
  };
}
