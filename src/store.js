import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';
import rootReducer from './reducers';

export default function configureStore(initialState, history) {
  const middleware = compose(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    ),

    process.env.NODE_ENV === 'development' &&
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  );

  const store = createStore(rootReducer, fromJS(initialState), middleware);

  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        const nextReducer = require('./reducers').default;
        store.replaceReducer(nextReducer);
      });
    }
  }

  return store;
}
