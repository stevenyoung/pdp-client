import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import pdpApp from '../reducers/pdpApp';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  return createStore(
    pdpApp,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )
  );
}
