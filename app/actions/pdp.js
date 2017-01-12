import fetch from 'isomorphic-fetch';

/* action types */

export const SEARCH_TERM = 'SEARCH_TERM';
export const REQUEST_PLACES = 'REQUEST_PLACES';
export const RECEIVE_PLACES = 'RECEIVE_PLACES';

/* action creators */

export function setSearchTerm(text) {
  return { type: SEARCH_TERM, text };
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

export function fetchPlaces(searchTerm) {
  return function (dispatch ) {
    dispatch(requestPlaces(searchTerm));
    return fetch(`http://localhost:5000/search/${searchTerm}`)
    .then(response => response.json())
    .then(json => dispatch(receivePlaces(searchTerm, json)));
  };
}
