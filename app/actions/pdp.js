/* action types */

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const REQUEST_PLACES = 'REQUEST_PLACES';
export const RECEIVE_PLACES = 'RECEIVE_PLACES';
export const SELECT_LOCATION = 'SELECT_LOCATION';
export const DISPLAY_PLACE = 'DISPLAY_PLACE';
export const GET_DEVICE_LOCATION = 'GET_DEVICE_LOCATION';

/* action creators */

const apiServer = '//localhost:8000';

export function setSearchTerm(text) {
  return { type: SET_SEARCH_TERM, text };
}

export function requestPlaces(query) {
  return {
    type: REQUEST_PLACES,
    query
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
  return function (dispatch) {
    dispatch(requestPlaces(query));
    return fetch(`${apiServer}/search/${query}`)
    .then(response => response.json())
    .then(json => dispatch(receivePlaces(query, json)));
  };
}

export function fetchPlacesByLocation(position) {
  const lat = position.lat;
  const lng = position.lng;
  const query = { searchTerm: '' };
  return function (dispatch) {
    dispatch(updateDeviceLocation(position));
    return fetch(`${apiServer}/places/near/${lng}/${lat}`)
    .then(response => response.json())
    .then(json => dispatch(receivePlaces(query, json)))
    .catch(err => (console.log('error: ', err)));
  };
}
