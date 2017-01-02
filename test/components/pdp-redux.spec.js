import { describe, it } from 'mocha';
import { expect } from 'chai';

import store from '../../app/store/pdp';
import * as actions from '../../app/actions/pdp';

describe('Pdp Redux Spec', () => {
  it('should get initial state for store', () => {
    expect(store.getState().searchResults.length).to.equal(0);
    expect(store.getState().searchTerm).to.equal('');
  });
  it('should set new search text', () => {
    expect(store.getState().searchTerm).to.equal('');
    store.dispatch(actions.setSearchTerm('some search term'));
    expect(store.getState().searchTerm).to.equal('some search term');
  });
});
