import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from 'reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// Utils
import { loadState, saveState } from 'utils/localStorage';
import throttle from 'lodash/throttle';

// Constants
import { THROTTLE_DELAY } from 'config/default';

const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

store.subscribe(
  throttle(() => {
    saveState({
      sortState: store.getState().sortState,
      searchState: store.getState().searchState,
    });
  }, THROTTLE_DELAY)
);
