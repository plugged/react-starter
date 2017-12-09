/* eslint-disable no-underscore-dangle */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import counter from 'reducers/counterReducer';

export default function configureStore(initialState = {}, history) {
  const middleware = routerMiddleware(history);

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer = composeEnhancers(applyMiddleware(middleware));

  const store = createStore(
    combineReducers({
      counter,
      router: routerReducer
    }),
    initialState,
    enhancer
  );

  return store;
}
