import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import pdpApp from '../reducers/pdpApp';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  return createStore(
    pdpApp,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
}
