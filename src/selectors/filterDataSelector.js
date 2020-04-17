import { createSelector } from 'reselect';

// Utils
import { filterData } from 'utils/dataUtils';

const dataSelector = state => state.dataState && state.dataState.data;
const filterSelector = state => state.filterState;

export const filterDataSelector = createSelector(
  [dataSelector, filterSelector],
  (dataCollection, filter) => {
    // console.log('%c filterDataSelector() called: ', 'color: red;');

    if (filter) {
      const filteredData = filterData(
        dataCollection,
        filter.filterKey,
        filter.filterValue,
        filter.filterGlobalValue,
        filter.filterToggleState,
        filter.filterEnums
      );

      return filteredData;
    }

    return dataCollection;
  }
);
