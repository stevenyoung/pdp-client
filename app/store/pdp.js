import { createStore } from 'redux';
import pdpApp from '../reducers/pdpApp';

const store = createStore(pdpApp);
export default store;
