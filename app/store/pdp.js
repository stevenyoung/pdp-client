import { createStore } from 'redux';
import pdpApp from '../reducers/pdp';

const store = createStore(pdpApp);
export default store;
