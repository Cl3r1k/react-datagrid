import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from 'reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
