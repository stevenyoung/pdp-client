import * as actions from '../actions/pdp';

const initialState = {
  searchTerm: '',
  searchResults: []
};

export default function pdpApp(state = initialState, action) {
  switch (action.type) {
  case actions.SEARCH_TERM:
    return { ...state, searchTerm: action.text };
  default:
    return state;
  }
}
