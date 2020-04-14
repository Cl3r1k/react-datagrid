import { combineReducers } from 'redux';
import { searchReducer } from 'reducers/searchReducer';
import { sortReducer } from 'reducers/sortReducer';
import { dataReducer } from 'reducers/dataReducer';

export const rootReducer = combineReducers({
  searchState: searchReducer,
  sortState: sortReducer,
  dataState: dataReducer,
});
