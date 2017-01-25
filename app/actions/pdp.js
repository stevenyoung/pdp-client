import fetch from 'isomorphic-fetch';

/* action types */

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const REQUEST_PLACES = 'REQUEST_PLACES';
export const RECEIVE_PLACES = 'RECEIVE_PLACES';
export const SELECT_LOCATION = 'SELECT_LOCATION';
export const DISPLAY_PLACE = 'DISPLAY_PLACE';

/* action creators */

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

export function fetchPlaces(query) {
  return function (dispatch) {
    dispatch(requestPlaces(query));
    return fetch(`//localhost:5000/search/${query}`)
    .then(response => response.json())
    .then(json => dispatch(receivePlaces(query, json)))
    .catch(err => (console.log('error: ', err)));
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
