import { describe, it } from 'mocha';
import { expect } from 'chai';

import configureStore from '../../app/store/configureStore';
import * as actions from '../../app/actions/pdp';

describe('Pdp Actions Spec', () => {
  const initialState = {
    query: {
      searchTerm: ''
    },
    places: [],
    mapCenter: {
      place: {
        lat: 37.749202,
        lng: -122.41575
      }
    }
  };
  it('should get initial state for store', () => {
    const store = configureStore(initialState);
    expect(store.getState().places.length).to.equal(0);
    expect(store.getState().query.searchTerm).to.equal('');
  });
  it('should set new search text', () => {
    const store = configureStore(initialState);
    expect(store.getState().query.searchTerm).to.equal('');
    store.dispatch(actions.setSearchTerm('some search term'));
    expect(store.getState().query.searchTerm).to.equal('some search term');
  });
});
