/* action types */

export const SEARCH_TERM = 'SEARCH_TERM';

/* action creators */

export function setSearchTerm(text) {
  return { type: SEARCH_TERM, text}
}

