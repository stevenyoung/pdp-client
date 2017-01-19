import fetch from 'isomorphic-fetch';

/* action types */

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const REQUEST_PLACES = 'REQUEST_PLACES';
export const RECEIVE_PLACES = 'RECEIVE_PLACES';

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
    return fetch(`http://localhost:5000/search/${query}`)
    .then(response => response.json())
    .then(json => dispatch(receivePlaces(query, json)));
  };
}
