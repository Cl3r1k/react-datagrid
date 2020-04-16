import { createSelector } from 'reselect';

// Utils
import { filterData, sortDataByFieldName } from 'utils/dataUtils';

const dataSelector = state => state.dataState && state.dataState.data;
const filterSelector = state => state.filterState;
const sortSelector = state => state.sortState;

export const processDataSelector = createSelector(
  [dataSelector, filterSelector, sortSelector],
  (dataCollection, filter, sort) => {
    // console.log('%c dataCollection: ', 'color: red;', dataCollection);
    // console.log('%c in processDataSelector() filter: ', 'color: red;', filter);
    // console.log('%c in processDataSelector() sort: ', 'color: red;', sort);

    const filteredData = filterData(
      dataCollection,
      filter.filterKey,
      filter.filterValue,
      filter.filterGlobalValue,
      filter.filterToggleState,
      filter.filterEnums
    );

    if (sort && sort.sortKeys.length) {
      const sortedData = sortDataByFieldName(
        filteredData,
        sort.sortKeys,
        sort.directions
      );

      return sortedData;
    }

    return filteredData;
  }
);
