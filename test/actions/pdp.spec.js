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
    },
    displayPlace: {},
    previousQueries: {
      terms: []
    }
  };
  it('should get initial state for store', () => {
    const store = configureStore(initialState);
    expect(store.getState().places.length).to.equal(0);
    expect(store.getState().query.searchTerm).to.equal('');
    expect(store.getState().previousQueries.terms.length).to.equal(0);
  });
  it('should set new search text', () => {
    const store = configureStore(initialState);
    expect(store.getState().query.searchTerm).to.equal('');
    store.dispatch(actions.setSearchTerm('some search term'));
    expect(store.getState().query.searchTerm).to.equal('some search term');
  });
  it('should request places given a query', () => {
    const store = configureStore(initialState);
    store.dispatch(actions.requestPlaces('blue'));
    expect(store.getState().places.isFetching).to.equal(true);
  });
  it('should append search to query list', () => {
    const store = configureStore(initialState);
    const previous = { terms: [] };
    expect(store.getState().previousQueries.terms.length).to.equal(0);
    store.dispatch(actions.updateQueryList('previously searched', previous));
    expect(store.getState().previousQueries.terms.length).to.equal(1);
    expect(store.getState().previousQueries.terms[0]).to.equal('previously searched');
  });
  it('should not append empty query to list', () => {
    const store = configureStore(initialState);
    const searches = { terms: [] };
    expect(store.getState().previousQueries.terms.length).to.equal(0);
    store.dispatch(actions.updateQueryList('', searches));
    expect(store.getState().previousQueries.terms.length).to.equal(0);
  });
  it('should not append a duplicate search term to list of queries', () => {
    const store = configureStore(initialState);
    const searches = { terms: [] };
    expect(store.getState().previousQueries.terms.length).to.equal(0);
    store.dispatch(actions.updateQueryList('blue', searches));
    expect(store.getState().previousQueries.terms.length).to.equal(1);
    store.dispatch(actions.updateQueryList('red', searches));
    expect(store.getState().previousQueries.terms.length).to.equal(2);
    store.dispatch(actions.updateQueryList('red', searches));
    expect(store.getState().previousQueries.terms.length).to.equal(2);
    store.dispatch(actions.updateQueryList('red ', searches));
    expect(store.getState().previousQueries.terms.length).to.equal(2);
  });
  it('should update map center', () => {
    const store = configureStore(initialState);
    expect(store.getState().mapCenter.place.lat).to.equal(37.749202);
    expect(store.getState().mapCenter.place.lng).to.equal(-122.41575);
    store.dispatch(actions.updateMapCenter({ lat: 0.0000, lng: 0.0000 }));
    expect(store.getState().mapCenter.place.lat).to.equal(0.0000);
    expect(store.getState().mapCenter.place.lng).to.equal(0.0000);
  });
  it('new action? should save recently retrieved results');
});
