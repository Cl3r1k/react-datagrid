import { combineReducers } from 'redux';
import { searchReducer } from 'reducers/searchReducer';
import { sortReducer } from 'reducers/sortReducer';

export const rootReducer = combineReducers({
  searchState: searchReducer,
  sortState: sortReducer,
});
