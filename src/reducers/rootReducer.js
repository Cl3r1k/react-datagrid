import { combineReducers } from 'redux';
import { filterReducer } from 'reducers/filterReducer';
import { sortReducer } from 'reducers/sortReducer';

export const rootReducer = combineReducers({
  filterState: filterReducer,
  sortState: sortReducer,
});