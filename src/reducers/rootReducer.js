import { combineReducers } from 'redux';
import { appReducer } from 'reducers/appReducer';
import { filterReducer } from 'reducers/filterReducer';
import { sortReducer } from 'reducers/sortReducer';
import { dataReducer } from 'reducers/dataReducer';

export const rootReducer = combineReducers({
  appState: appReducer,
  dataState: dataReducer,
  filterState: filterReducer,
  sortState: sortReducer,
});
