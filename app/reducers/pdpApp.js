import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
  query,
  places,
  mapCenter,
  displayPlace,
  updateLocation,
  previousQueries,
  isUserAddingContent,
  isUserLoggedIn } from './pdp';

const reducers = {
  query,
  places,
  mapCenter,
  displayPlace,
  updateLocation,
  previousQueries,
  isUserAddingContent,
  isUserLoggedIn,
  formReducer
};

const pdpApp = combineReducers(reducers);

export default pdpApp;
