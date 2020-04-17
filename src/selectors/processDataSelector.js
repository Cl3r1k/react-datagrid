import { createSelector } from 'reselect';

// Utils
import { sortDataByFieldName } from 'utils/dataUtils';

// Selectors
import { filterDataSelector } from 'selectors/filterDataSelector';

const sortSelector = state => state.sortState;

export const processDataSelector = createSelector(
  [filterDataSelector, sortSelector],
  (filteredData, sort) => {
    // console.log('%c processDataSelector() called: ', 'color: red;');
    // console.log('%c dataCollection: ', 'color: red;', dataCollection);
    // console.log('%c in processDataSelector() filter: ', 'color: red;', filter);
    // console.log('%c in processDataSelector() sort: ', 'color: red;', sort);

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
