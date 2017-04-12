import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';

export default function configureStore(initialState = {}, history) {
  const middleware = routerMiddleware(history);

  const enhancer = compose(
    applyMiddleware(middleware),
    /* eslint-disable no-underscore-dangle */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    /* eslint-enable */
  );
  const store = createStore(
    combineReducers({
      // ...reducers,
      router: routerReducer
    }),
    initialState,
    enhancer
  );

  return store;
}
