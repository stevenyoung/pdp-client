import * as actions from '../actions/pdp';

const initialState = {
  searchTerm: '',
  searchResults: []
};

export default function pdpApp(state = initialState, action) {
  switch (action.type) {
  case actions.SEARCH_TERM:
    return Object.assign({}, state, { searchTerm: action.text });
  default:
    return state;
  }
}
