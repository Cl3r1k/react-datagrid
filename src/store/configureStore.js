/* eslint-disable global-require */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from 'reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// Utils
import { queryStringParse } from 'utils/querySting';
import { loadState, saveState } from 'utils/localStorage';
import throttle from 'lodash/throttle';

// Constants
import { THROTTLE_DELAY } from 'config/default';

// ONLY add 'redux-immutable-state-invariant' middleware in PROD mode
const middleware =
  process.env.NODE_ENV !== 'production'
    ? [require('redux-immutable-state-invariant').default(), thunk, logger]
    : [thunk, logger];

const stateWithParams = queryStringParse();
const persistedState = loadState();

export const store = createStore(
  rootReducer,
  stateWithParams || persistedState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(
  throttle(() => {
    saveState({
      sortState: store.getState().sortState,
      searchState: {
        ...store.getState().searchState,
        selectedItems: [],
        deletedItems: [],
      },
    });
  }, THROTTLE_DELAY)
);

/*

* Redux Style Guide (Source: https://redux.js.org/style-guide/style-guide)

* Priority A Rules: Essential
* - Do Not Mutate State (Use tools such as `redux-immutable-state-invariant`)
* - Reducers Must Not Have Side Effects
* - Do Not Put Non-Serializable Values in State or Actions
* - Only One Redux Store Per App

* Priority B Rules: Strongly Recommended
* - Use Redux Toolkit for Writing Redux Logic
* - Use Immer for Writing Immutable Updates
* - Structure Files as Feature Folders or Ducks
* - Put as Much Logic as Possible in Reducers
* - Reducers Should Own the State Shape
* - Name State Slices Based On the Stored Data
* - Treat Reducers as State Machines
* - Normalize Complex Nested/Relational State
* - Model Actions as Events, Not Setters
* - Write Meaningful Action Names
* - Allow Many Reducers to Respond to the Same Action
* - Avoid Dispatching Many Actions Sequentially
* - Evaluate Where Each Piece of State Should Live
* - Connect More Components to Read Data from the Store
* - Use the Object Shorthand Form of `mapDispatch` with `connect`
* - Call `useSelector` Multiple Times in Function Components
* - Use Static Typing
* - Use the Redux DevTools Extension for Debugging
* - Use Plain JavaScript Objects for State

* Priority C Rules: Recommended:
* - Write Action Types as domain/eventName
* - Write Actions Using the Flux Standard Action Convention
* - Use Action Creators
* - Use Thunks for Async Logic
* - Move Complex Logic Outside Components

*/
