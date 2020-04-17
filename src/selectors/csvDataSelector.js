import { createSelector } from 'reselect';

// Selectors
import { processDataSelector } from 'selectors/processDataSelector';

// Constants
import { MAP } from 'config/default';

const hiddenColumnsSelector = state =>
  state.appState && state.appState.hiddenColumns;

export const csvDataSelector = createSelector(
  [processDataSelector, hiddenColumnsSelector],
  (processedData, hiddenColumns) => {
    const csvData = processedData.map(item => {
      const filteredItem = {};
      Object.keys(item).forEach((key, index) => {
        if (!MAP[index].isHidden && !hiddenColumns[key]) {
          if (typeof item[key] === 'object') {
            filteredItem[key] = Object.values(item[key]).join(' ');
          } else {
            filteredItem[key] = item[key];
          }
        }
      });

      return filteredItem;
    });

    return csvData;
  }
);
